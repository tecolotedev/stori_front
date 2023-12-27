import { serverListAccounts } from "@/api";
import { Paper, SimpleGrid, Title } from "@mantine/core";
import { Account } from "@/types";
import { CreateAccountForm } from "@/components/forms";
import { redirect } from "next/navigation";
import { ListAccounts } from "@/components/organisms";

const AppPage = async () => {
  const res = await serverListAccounts<Account[]>();

  if (!res.ok) redirect("/login");

  return (
    <div>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p={20}
      >
        <ListAccounts accounts={res.data} />

        <Paper shadow="xs" radius="xl" p="xl" bg="#04d180" h="fit-content">
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
