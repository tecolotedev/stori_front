import Image from "next/image";

import { Box, Button, Flex } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Box component="main">
      <Flex justify="flex-end">
        <Box p={10}>
          <Button component={Link} href="/login" bg="#04d180">
            Login
          </Button>
        </Box>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="100%"
        h="500px"
      >
        <Image
          src="/img/logo.png"
          width={300}
          height={120}
          alt="logo stori"
          priority
        />
      </Flex>
    </Box>
  );
}
