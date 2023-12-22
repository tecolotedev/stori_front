import { Card as CardMantine, Grid, GridCol, Text, Stack } from "@mantine/core";
import Link from "next/link";
import { Account } from "@/types";

type Props = {
  account: Account;
};
export const AccountCard = ({ account }: Props) => {
  const { ID, Balance, CreatedAt, Currency } = account;
  const date = new Date(CreatedAt);
  const datetime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  return (
    <Link href={`/app/${ID}`}>
      <CardMantine shadow="sm" padding="lg" radius="md" withBorder>
        <Grid grow gutter="xs">
          <GridCol span={12}>
            <Stack gap="xs">
              <Text fw={700} size="lg">
                Balance
              </Text>
              <Text>{Balance}</Text>
            </Stack>
          </GridCol>
          <GridCol span={6}>
            <Stack gap="xs">
              <Text fw={700} size="lg">
                Currency
              </Text>
              <Text>{Currency}</Text>
            </Stack>
          </GridCol>
          <GridCol span={6}>
            <Stack gap="xs">
              <Text fw={700} size="lg">
                Created At
              </Text>
              <Text>{datetime}</Text>
            </Stack>
          </GridCol>
        </Grid>
      </CardMantine>
    </Link>
  );
};
