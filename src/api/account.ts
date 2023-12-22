import { serverWrapper, APIResponse } from "./wrapper";

export const serverListAccounts = async <T>(): Promise<APIResponse<T>> =>
  serverWrapper({ path: "/api/account", method: "GET" });
