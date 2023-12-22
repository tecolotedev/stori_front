"use client";

import { Button, Flex, Stack } from "@mantine/core";
import { TextInput, PasswordInput } from "../atoms";
import { useState } from "react";
import { login } from "@/api";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { ok } = await login<null>(values);
    console.log("ok: ", ok);
    if (ok) router.push("/app");
  };
  return (
    <Flex justify="center" p={20}>
      <form onSubmit={onSubmit}>
        <Stack p={10}>
          <TextInput
            label="Email"
            placeholder="test@email.com"
            value={values["email"]}
            onChange={(v) => setValues({ ...values, email: v })}
          />

          <PasswordInput
            label="Password"
            value={values["password"]}
            onChange={(v) => setValues({ ...values, password: v })}
          />

          <Button type="submit" bg="#04d180">
            Login
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
