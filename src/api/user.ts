import { clientWrapper, serverWrapper, APIResponse } from "./wrapper";

type LoginParams = {
  email: string;
  password: string;
};
export const clientLogin = async <T>(
  keys: LoginParams
): Promise<APIResponse<T>> =>
  clientWrapper({ path: "/api/login", method: "POST", body: keys });

type SignupParams = {
  email: string;
  password: string;
  username: string;
};
export const clientSignup = async <T>(
  keys: SignupParams
): Promise<APIResponse<T>> =>
  clientWrapper({ path: "/api/signup", method: "POST", body: keys });

export const verifyToken = async <T>(): Promise<APIResponse<T>> =>
  serverWrapper({ path: "/api/verifyToken", method: "GET" });

export const serverVerifyAccount = async <T>(
  id: string
): Promise<APIResponse<T>> =>
  serverWrapper({ path: `/api/verifyAccount?id=${id}`, method: "GET" });
