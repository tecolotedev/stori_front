import { clientWrapper, APIResponse } from "./wrapper";

type LoginParams = {
  email: string;
  password: string;
};
export const clientLogin = async <T>(
  keys: LoginParams
): Promise<APIResponse<T>> =>
  clientWrapper({ path: "/api/login", method: "POST", body: keys });
