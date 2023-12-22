import { serverListAccounts } from "@/api";

const AppPage = async () => {
  const res = await serverListAccounts();
  console.log("res: ", res);
  return (
    <div>
      app AppPage
      <div>asdf</div>
    </div>
  );
};
export default AppPage;
