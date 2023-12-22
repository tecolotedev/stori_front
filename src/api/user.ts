import { notifications } from "@mantine/notifications";

const apiUrl = String(process.env.NEXT_PUBLIC_API_URL);

type APIResponse<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      data: undefined;
    };

type CallAPIWrapperParams = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: {
    [key: string]: any;
  };
};

export const callAPIWrapper = async <T>({
  path,
  method,
  body,
}: CallAPIWrapperParams): Promise<APIResponse<T>> => {
  try {
    const res = await fetch(apiUrl + path, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: body && JSON.stringify(body),
    }).then((res) => res.json());
    return { ok: true, data: res as T };
  } catch (err: any) {
    notifications.show({
      color: "red",
      title: "Error login",
      message: "wrong email or password",
    });

    console.log("err api call: ", err);

    return { ok: false, data: undefined };
  }
};

type LoginParams = {
  email: string;
  password: string;
};

export const login = async <T>(keys: LoginParams): Promise<APIResponse<T>> =>
  callAPIWrapper({ path: "/api/login", method: "POST", body: keys });
