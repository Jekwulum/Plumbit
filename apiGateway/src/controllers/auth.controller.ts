import { Request, Response } from 'express';
import { ServiceError } from '@grpc/grpc-js';
import clients from '../clients/user.client';
import appLogger from '../utils/appLogger';
import TokenHelper from '../utils/token.helper';

const { AuthClient } = clients;

const AuthController = {
  RegisterUser: async (req: Request, res: Response) => {
    AuthClient.RegisterUser(req.body, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err);
        res.status(500).json({ message: `${err.message}` });
      } else {
        if (result) {
          const accessToken = TokenHelper.generateAccessToken(result);
          const refreshToken = TokenHelper.generateRefreshToken(result);
          res.status(201).json({ data: { result, accessToken, refreshToken } });
        } else {
          res.status(500).json({ message: 'Registration failed' });
        }
      }
    });
  },

  LoginUser: async (req: Request, res: Response) => {
    AuthClient.LoginUser(req.body, (err: ServiceError | null, result) => {
      if (err) {
        appLogger.error(err);
        res.status(500).json({ message: `${err.message}` });
      } else {
        if (result) {
          const accessToken = TokenHelper.generateAccessToken(result);
          const refreshToken = TokenHelper.generateRefreshToken(result);
          res.status(200).json({ data: { result, accessToken, refreshToken } });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
  },

  UpdatePassword: async (req: Request, res: Response) => {
    const userData = { password: req.body.password, id: res.locals.user.id };
    try {
      AuthClient.UpdatePassword(userData, (err: ServiceError | null, result) => {
        if (err) {
          appLogger.error(err);
          res.status(500).json({ message: `${err.message}` });
        } else {
          if (result) {
            res.status(200).json({ message: 'Password changed' });
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        }
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default AuthController;