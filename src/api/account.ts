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

export const serverGetAccount = async <T>(
  account_id: string
): Promise<APIResponse<T>> =>
  serverWrapper({ path: `/api/account/${account_id}`, method: "GET" });

type AddTransactionsParams = {
  account_id: string;
  file: File;
};
export const clientAddTransactions = async <T>({
  account_id,
  file,
}: AddTransactionsParams): Promise<APIResponse<T>> => {
  const form = new FormData();
  form.set("file", file);
  return clientWrapper({
    path: `/api/account/${account_id}`,
    method: "PUT",
    body: form,
  });
};
