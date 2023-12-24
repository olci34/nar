import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkItemType = {
  href: string;
  target?: "_blank" | "_self";
  path: string;
  children: React.ReactNode;
};

export function NavLinkItem({ href, target, path, children }: NavLinkItemType) {
  const isActive = href === path;
  const textDecorColor = useColorModeValue("red", "orange");

  return (
    <Link
      href={href}
      target={target}
      scroll={false}
      style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}
    >
      <Text
        as="span"
        textDecoration={isActive ? "underline" : "none"}
        textUnderlineOffset={4}
        // textDecorationThickness={2}
        textDecorationColor={isActive ? textDecorColor : undefined}
        display="inline-flex"
        gap={1}
      >
        {children}
      </Text>
    </Link>
  );
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Box pos="fixed" as="nav" w="100%" css={{ backdropFilter: "blur(5px)" }}>
      <Container
        centerContent
        maxW="container.xl"
        display="flex"
        p={2}
        flexDirection="row"
      >
        <Heading as="h2">LOGO</Heading>
        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ base: "row" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justify="space-around"
        >
          <NavLinkItem href="/" target="_blank" path={router.asPath}>
            Home
          </NavLinkItem>
          <NavLinkItem href="#" target="_blank" path={router.asPath}>
            Profile
          </NavLinkItem>
        </Stack>
      </Container>
    </Box>
  );
}
