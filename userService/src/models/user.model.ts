import mongoose, { Document, Schema } from "mongoose";
import argon2 from "argon2";

import appLogger from "../utils/userLogger";

export const ROLES: { [key: string]: string } = Object.freeze({ CUSTOMER: "customer", PLUMBER: "plumber" });

export interface UserDoc extends Document {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  role: string;
  validatePassword: (userPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDoc>({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(ROLES), default: ROLES.CUSTOMER },
});

userSchema.pre<UserDoc>("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await argon2.hash(this.password);
  this.password = hash;
  appLogger.info("Password hashed before saving user");
  next();
});

userSchema.methods.validatePassword = async function (userPassword: string): Promise<boolean> {
  return await argon2.verify(this.password, userPassword);
};

const UserModel = mongoose.model<UserDoc>("User", userSchema);

export default UserModel;
