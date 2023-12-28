"use client";

import { Button, Flex, Stack, Text } from "@mantine/core";
import { useCookies } from "next-client-cookies";
import { TextInput, PasswordInput } from "../atoms";
import { useState } from "react";
import { clientLogin } from "@/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const LoginForm = () => {
  const cookies = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await clientLogin<string>(values);
    if (res.ok) {
      router.push("/app");
      cookies.set("access_token", res.data);
    } else setIsLoading(false);
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
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <Text c="white" fs="italic" td="underline" size="xs">
              Create Account
            </Text>
          </Link>

          <Button
            type="submit"
            bg="#04d180"
            loading={isLoading}
            disabled={isLoading}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
