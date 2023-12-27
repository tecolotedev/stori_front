import { serverWrapper, clientWrapper, APIResponse } from "./wrapper";

export const serverListAccounts = async <T>(): Promise<APIResponse<T>> =>
  serverWrapper({ path: "/api/account", method: "GET" });

type CreateAccountParams = {
  balance: number;
  currency: string;
};
export const clientCreateAccount = async <T>(
  body: CreateAccountParams
): Promise<APIResponse<T>> =>
  clientWrapper({ path: "/api/account", method: "POST", body });
