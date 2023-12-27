import { Header } from "@/components/molecules";
import { serverVerifyAccount } from "@/api";
import { Flex, Title } from "@mantine/core";

type Props = {
  searchParams: {
    id: string;
  };
};

const VerifyAccountPage = async ({ searchParams: { id } }: Props) => {
  const { ok } = await serverVerifyAccount(id);
  return (
    <div>
      <Header href="/" />
      <Flex justify="center" mt={100}>
        {ok ? (
          <Title c="white">User Account Verified </Title>
        ) : (
          <Title c="white">Error verifying account </Title>
        )}
      </Flex>
    </div>
  );
};
export default VerifyAccountPage;
