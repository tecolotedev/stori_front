import { serverListAccounts } from "@/api";
import { Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import { AccountCard } from "@/components/molecules";
import { Account } from "@/types";
import { CreateAccountForm } from "@/components/forms";
import { cookies } from "next/headers";

const AppPage = async () => {
  const { ok, data } = await serverListAccounts<Account[]>();
  const cookiesStore = cookies();
  const access_token = cookiesStore.get("access_token");
  console.log(access_token);
  // const removeCookie = async () => {
  //   "use server";
  //   const cookiesStore = cookies();
  //   cookiesStore.delete("access_token");
  // };
  // await removeCookie();
  // if (!ok) {
  //   const cookiesStore = cookies();
  //   cookiesStore.delete("access_token");
  // }

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
            {data?.map((account) => {
              return <AccountCard account={account} key={account.ID} />;
            })}
          </Stack>
        </Paper>
        <Paper shadow="xs" radius="xl" p="xl" bg="#04d180">
          <Title c="white" order={5}>
            Create Account
          </Title>
          <CreateAccountForm />
        </Paper>
      </SimpleGrid>
    </div>
  );
};
export default AppPage;
