"use client";
import { notifications } from "@mantine/notifications";
import { Button, Flex, Stack, Text } from "@mantine/core";
import { TextInput, PasswordInput } from "../atoms";
import { useState } from "react";
import { clientSignup } from "@/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await clientSignup<null>(values);
    if (res.ok) {
      notifications.show({
        title: "Account Created",
        message: "Verify your email",
      });
      router.push("/");
    } else setIsLoading(false);
  };
  return (
    <Flex justify="center" p={20}>
      <form onSubmit={onSubmit}>
        <Stack p={10}>
          <TextInput
            label="Username"
            value={values["username"]}
            onChange={(v) => setValues({ ...values, username: v })}
          />

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

          <Link href="/login" style={{ textDecoration: "none" }}>
            <Text c="white" fs="italic" td="underline" size="xs">
              Login
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
