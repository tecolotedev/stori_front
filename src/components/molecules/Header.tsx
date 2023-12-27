import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
};
export const Header = ({ href }: Props) => {
  return (
    <header>
      <Link href={href}>
        <Image
          src="/img/logo.png"
          width={250}
          height={100}
          alt="logo stori"
          priority
        />
      </Link>
    </header>
  );
};
