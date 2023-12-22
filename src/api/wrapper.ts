import { notifications } from "@mantine/notifications";
const apiUrl = String(process.env.NEXT_PUBLIC_API_URL);

type CallAPIWrapperParams = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: {
    [key: string]: any;
  };
};

export type APIResponse<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      data: undefined;
    };

export const clientWrapper = async <T>({
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
    console.log("err call client: ", String(err));
    notifications.show({
      color: "red",
      title: "Error login",
      message: "wrong email or password",
    });

    return { ok: false, data: undefined };
  }
};

export const serverWrapper = async <T>({
  path,
  method,
  body,
}: CallAPIWrapperParams): Promise<APIResponse<T>> => {
  //can be imported just in sever components
  const { cookies } = await import("next/headers");

  const cookiesStore = cookies();
  const token = cookiesStore.get("access_token");

  try {
    const res = await fetch(apiUrl + path, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: `access_token=${token?.value}`,
      },
      credentials: "include",
      body: body && JSON.stringify(body),
    }).then((res) => res.json());
    return { ok: true, data: res as T };
  } catch (err: any) {
    console.log("err call server: ", String(err));

    cookiesStore.delete("access_token");

    return { ok: false, data: undefined };
  }
};
