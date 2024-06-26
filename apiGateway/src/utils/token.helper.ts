import jwt from 'jsonwebtoken';
import { User } from '../protobufs/userPackage/User';

const secretKey = 'your_secret_key_here';
const refreshTokenSecretKey = 'your_refresh_token_secret_key_here';

const TokenHelper = {
  generateAccessToken(user: User) {
    console.log(user);
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
  },

  generateRefreshToken(user: User) {
    const payload = {
      id: user.id,
    };
    return jwt.sign(payload, refreshTokenSecretKey, { expiresIn: '7d' });
  },

  verifyToken(token: string) {
    try {
      return jwt.verify(token, secretKey);
    } catch (error) {
      return null;
    }
  },

  verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, refreshTokenSecretKey);
    } catch (error) {
      return null;
    }
  }
};

export default TokenHelper;