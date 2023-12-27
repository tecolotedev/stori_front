"use client";

import { Button, Flex, Stack } from "@mantine/core";
import { Select, NumberInput } from "@/components/atoms";
import { useState } from "react";
import { clientCreateAccount } from "@/api";
import { Account } from "@/types";
import { accountStore } from "@/store/account";

export const CreateAccountForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({ balance: 0, currency: "GBP" });
  const { addAccount } = accountStore();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await clientCreateAccount<Account>(values);

    if (res.ok) addAccount(res.data);
    setIsLoading(false);
  };

  return (
    <Flex justify="center" p={20}>
      <form onSubmit={onSubmit}>
        <Stack p={10}>
          <Select
            label="Currency"
            placeholder="Pick a value"
            value={values["currency"]}
            onChange={(v) => setValues({ ...values, currency: v })}
            data={["USD", "GBP", "MXN"]}
          />
          <NumberInput
            label="Balance"
            value={values["balance"]}
            min={0}
            onChange={(v) => setValues({ ...values, balance: v })}
          />
          <Button
            type="submit"
            bg="#003a40"
            loading={isLoading}
            disabled={isLoading}
          >
            Create Account
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
