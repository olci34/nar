import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiFruitTree } from "react-icons/gi";

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
        alignItems="center"
      >
        {children}
      </Text>
    </Link>
  );
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Box
      pos="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(5px)" }}
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="container.xl">
        <Flex align="center" mr={10} gap={1}>
          <GiFruitTree size="2rem" />
          <Heading as="h2">NAR</Heading>
        </Flex>
        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ base: "row" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <NavLinkItem href="/" path={router.asPath}>
            Home
          </NavLinkItem>
          <NavLinkItem href="#" path={router.asPath}>
            Profile
          </NavLinkItem>
        </Stack>
      </Container>
    </Box>
  );
}
