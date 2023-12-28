import { LoginForm } from "@/components/forms";
import { CookiesProvider } from "next-client-cookies/server";

const LoginPage = () => {
  return (
    <div>
      <CookiesProvider>
        <LoginForm />
      </CookiesProvider>
    </div>
  );
};

export default LoginPage;
