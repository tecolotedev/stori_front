"use client";
import { useEffect } from "react";
import { Account } from "@/types";
import { Stack, Paper, Title } from "@mantine/core";
import { accountStore } from "@/store/account";
import { AccountCard } from "@/components/molecules";
import Link from "next/link";

type Props = {
  accounts: Account[];
};

export const ListAccounts = (props: Props) => {
  const { accounts, initAccounts } = accountStore();

  useEffect(() => {
    initAccounts(props.accounts || []);
  }, []);

  return (
    <Paper shadow="xs" radius="xl" p="xl" bg="#04d180">
      <Title c="white" order={5}>
        Accounts
      </Title>
      <Stack>
        {accounts.map((account) => {
          return (
            <Link key={account.ID} href={`/app/${account.ID}`}>
              <AccountCard account={account} />
            </Link>
          );
        })}
      </Stack>
    </Paper>
  );
};
