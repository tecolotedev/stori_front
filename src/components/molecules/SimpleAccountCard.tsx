"use client";
import { Card as CardMantine, Grid, GridCol, Text, Stack } from "@mantine/core";
import { transferStore } from "@/store/transfer";

type Props = {
  currency: string;
  balance: number;
};
export const SimpleAccountCard = ({
  currency,
  balance: balanceProps,
}: Props) => {
  const { balance } = transferStore();

  return (
    <CardMantine shadow="sm" padding="lg" radius="md" withBorder>
      <Grid grow gutter="xs">
        <GridCol span={6}>
          <Stack gap="xs">
            <Text fw={700} size="lg">
              Balance
            </Text>
            <Text>{(balance || balanceProps).toFixed(2)}</Text>
          </Stack>
        </GridCol>
        <GridCol span={6}>
          <Stack gap="xs">
            <Text fw={700} size="lg">
              Currency
            </Text>
            <Text>{currency}</Text>
          </Stack>
        </GridCol>
      </Grid>
    </CardMantine>
  );
};
