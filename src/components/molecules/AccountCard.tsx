import { Card as CardMantine, Grid, GridCol, Text, Stack } from "@mantine/core";
import { Account } from "@/types";

type Props = {
  account: Account;
};
export const AccountCard = ({ account }: Props) => {
  const { Balance, CreatedAt, Currency } = account;
  const date = new Date(CreatedAt);
  const datetime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  return (
    <CardMantine shadow="sm" padding="lg" radius="md" withBorder>
      <Grid grow gutter="xs">
        <GridCol span={12}>
          <Stack gap="xs">
            <Text fw={700} size="lg">
              Balance
            </Text>
            <Text>{Balance.toFixed(2)}</Text>
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
  );
};
