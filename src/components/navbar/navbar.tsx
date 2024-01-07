import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiFruitTree } from "react-icons/gi";
import SearchBox from "../search-box/search-box";
import { FaAngleDown } from "react-icons/fa6";

//API: Categories
const CATEGORIES = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Geometry",
  "Foreign Language",
  "Geography",
];

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
        textUnderlineOffset={6}
        textDecorationThickness="2px"
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
    <Flex gap={4}>
      <Box display="flex" gap={2}>
        <Center>
          <GiFruitTree size="2rem" />
        </Center>
        <Heading>NAR</Heading>
      </Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon as={FaAngleDown} boxSize={3} />}
          bgColor="transparent"
          _hover={{ backgroundColor: "grey" }}
        >
          Categories
        </MenuButton>
        <MenuList>
          {CATEGORIES.map((ctg) => (
            <MenuItem key={ctg}>{ctg}</MenuItem>
          ))}
        </MenuList>
      </Menu>
      <SearchBox />
      <Spacer />
      <NavLinkItem href="/" path={router.asPath}>
        Home
      </NavLinkItem>
      <NavLinkItem href="/signup" path={router.asPath}>
        Sign Up
      </NavLinkItem>
    </Flex>
  );
}
