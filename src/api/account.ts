import { serverWrapper, APIResponse } from "./wrapper";

export const serverListAccounts = async <T>(): Promise<APIResponse<T>> =>
  serverWrapper({ path: "/api/account", method: "GET" });

export const verifyToken = async <T>(): Promise<APIResponse<T>> =>
  serverWrapper({ path: "/api/verifyToken", method: "GET" });
