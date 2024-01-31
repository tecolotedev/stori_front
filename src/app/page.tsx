"use client";

import { Box, Button, Flex } from "@mantine/core";

export default function Home() {
  const onClick = async () => {
    const res = await fetch("https://stori-back.tecolotedev.com/token", {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
    console.log(res);
  };
  return (
    <Box component="main">
      <Button onClick={onClick}>Fetch</Button>
    </Box>
  );
}
