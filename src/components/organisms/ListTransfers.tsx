"use client";
import { useEffect } from "react";
import { Transfer } from "@/types";
import { Stack, Paper } from "@mantine/core";
import { transferStore } from "@/store/transfer";
import { TransferCard } from "@/components/molecules";

type Props = {
  transfers: Transfer[];
};

export const ListTransfers = (props: Props) => {
  const { transfers, initTransfers } = transferStore();

  useEffect(() => {
    initTransfers(props.transfers || []);
  }, []);

  return (
    <Paper shadow="xs" radius="xl" p="xl" bg="#04d180">
      <Stack>
        {transfers.map((transfer) => {
          return <TransferCard transfer={transfer} key={transfer.ID} />;
        })}
      </Stack>
    </Paper>
  );
};
