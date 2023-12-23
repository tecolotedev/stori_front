"use client";

import { Button, Flex, Stack } from "@mantine/core";
import { TextInput, PasswordInput } from "../atoms";
import { useState } from "react";
import { clientLogin } from "@/api";
import { useRouter } from "next/navigation";

export const CreateAccountForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const { ok } = await clientLogin<null>(values);

    if (ok) router.push("/app");
    else setIsLoading(false);
  };

  return (
    <Flex justify="center" p={20}>
      <form>
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
