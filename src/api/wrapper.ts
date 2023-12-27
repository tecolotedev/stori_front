import { notifications } from "@mantine/notifications";
const apiUrl = String(process.env.NEXT_PUBLIC_API_URL);

type CallAPIWrapperParams = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?:
    | {
        [key: string]: any;
      }
    | FormData;
};

type RightResponse<T> = {
  ok: true;
  data: T;
};

type BadResponse = {
  ok: false;
  message: string;
};

export type APIResponse<T> = RightResponse<T> | BadResponse;

export const clientWrapper = async <T>({
  path,
  method,
  body,
}: CallAPIWrapperParams): Promise<APIResponse<T>> => {
  const isFormData = body instanceof FormData;

  try {
    const res = await fetch(apiUrl + path, {
      method,
      ...(!isFormData && {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      credentials: "include",
      body: isFormData ? body : JSON.stringify(body),
    }).then((res) => res.json());

    if (!res.ok) {
      notifications.show({
        color: "red",
        title: "Error",
        message: res.message,
      });
      return res as BadResponse;
    }

    return res as RightResponse<T>;
  } catch (err: any) {
    console.log("err call client: ", String(err));
    notifications.show({
      color: "red",
      title: "Error login",
      message: "Something went wrong, please try it later",
    });

    return { ok: false, message: "Something went wrong, please try it later" };
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

    if (!res.ok) return res as BadResponse;
    return res as RightResponse<T>;
  } catch (err: any) {
    console.log("err call server: ", String(err));

    return { ok: false, message: "Something went wrong" };
  }
};
