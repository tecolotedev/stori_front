import { serverGetAccount } from "@/api";
import { Account, Transfer } from "@/types";
import { redirect } from "next/navigation";
import { Box, Paper, SimpleGrid, Title } from "@mantine/core";
import { SimpleAccountCard } from "@/components/molecules";
import { UploadTransactionsForm } from "@/components/forms";
import { ListTransfers } from "@/components/organisms/ListTransfers";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";

type Props = {
  params: {
    account_id: string;
  };
};
const AccountPage = async ({ params: { account_id } }: Props) => {
  const res = await serverGetAccount<{
    account: Account;
    transfers: Transfer[];
  }>(account_id);

  if (!res.ok) return redirect("/");

  return (
    <div>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p={20}
      >
        <Paper>
          <Box p={10}>
            <Link href="/app">
              <ActionIcon variant="outline" aria-label="Settings">
                &lsaquo;
              </ActionIcon>
            </Link>
          </Box>
          <Title order={2}>Account</Title>
          <SimpleAccountCard
            currency={res.data.account.Currency}
            balance={res.data.account.Balance}
          />
          <Title order={2}>Transfers</Title>
          <ListTransfers transfers={res.data.transfers} />
        </Paper>

        <Paper shadow="xs" radius="xl" p="xl" bg="#04d180" h="fit-content">
          <Title c="white" order={5}>
            Create Transactions
          </Title>
          <UploadTransactionsForm account_id={account_id} />
        </Paper>
      </SimpleGrid>
    </div>
  );
};
export default AccountPage;
