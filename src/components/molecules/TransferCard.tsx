import { Card as CardMantine, Grid, GridCol, Text, Stack } from "@mantine/core";
import { Transfer } from "@/types";

type Props = {
  transfer: Transfer;
};
export const TransferCard = ({ transfer }: Props) => {
  const { Amount, CreatedAt, Reason } = transfer;
  const date = new Date(CreatedAt);
  const datetime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  return (
    <CardMantine shadow="sm" padding="lg" radius="md" withBorder>
      <Grid grow gutter="xs">
        <GridCol span={12}>
          <Stack gap="xs">
            <Text fw={700} size="lg">
              Amount
            </Text>
            <Text>{Amount}</Text>
          </Stack>
        </GridCol>
        <GridCol span={6}>
          <Stack gap="xs">
            <Text fw={700} size="lg">
              Reason
            </Text>
            <Text>{Reason}</Text>
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
