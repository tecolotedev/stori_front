import { serverListAccounts } from "@/api";
import { Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import { AccountCard } from "@/components/molecules";
import { Account } from "@/types";

const AppPage = async () => {
  const res = await serverListAccounts<Account[]>();
  return (
    <div>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p={20}
      >
        <Paper shadow="xs" radius="xl" p="xl" bg="#04d180">
          <Title c="white" order={5}>
            Accounts
          </Title>
          <Stack>
            {res.data?.map((account) => {
              return <AccountCard account={account} key={account.ID} />;
            })}
          </Stack>
        </Paper>
        <Paper shadow="xs" radius="xl" p="xl" bg="#04d180">
          <Title c="white" order={5}>
            Create Account
          </Title>
        </Paper>
      </SimpleGrid>
    </div>
  );
};
export default AppPage;
