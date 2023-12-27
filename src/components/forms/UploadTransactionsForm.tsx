"use client";
import { useState } from "react";
import { Account, Transfer } from "@/types";
import { notifications } from "@mantine/notifications";
import { Button, FileInput, Stack } from "@mantine/core";
import { clientAddTransactions } from "@/api";
import { transferStore } from "@/store/transfer";

type Props = {
  account_id: string;
};
export const UploadTransactionsForm = ({ account_id }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateBalance, setTransfers } = transferStore();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;
    setIsLoading(true);
    const res = await clientAddTransactions<{
      account: Account;
      transfers: Transfer[];
    }>({ account_id, file });

    if (res.ok) {
      notifications.show({
        title: "Transfers",
        message: "Email sent",
      });
      updateBalance(res.data.account.Balance);
      setTransfers(res.data.transfers);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack p={10}>
        <FileInput accept=".csv" value={file} onChange={setFile} />
        <Button
          type="submit"
          bg="#003a40"
          loading={isLoading}
          disabled={isLoading}
        >
          Make Transactions
        </Button>
      </Stack>
    </form>
  );
};
