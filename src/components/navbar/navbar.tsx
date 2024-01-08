import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiFruitTree } from "react-icons/gi";
import SearchBox from "../search-box/search-box";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";

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
        whiteSpace="nowrap"
      >
        {children}
      </Text>
    </Link>
  );
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Flex gap={4} flex={1} align="center">
      <Link href="/" prefetch={false}>
        <HStack gap={2} align="center">
          <GiFruitTree size="2rem" />
          <Heading display={{ base: "none", md: "inline" }}>NAR</Heading>
        </HStack>
      </Link>

      <Box display={{ base: "none", md: "flex" }}>
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
      </Box>
      <Box display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={Button}
            bgColor="transparent"
            _hover={{ backgroundColor: "grey" }}
          >
            <Icon as={FaBars} />
          </MenuButton>
          <MenuList>
            {CATEGORIES.map((ctg) => (
              <MenuItem key={ctg}>{ctg}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      <Box display="flex" flexBasis="100%">
        <SearchBox />
      </Box>

      <HStack gap={2}>
        <Button
          display={{ base: "none", sm: "inline-flex" }}
          backgroundColor="transparent"
        >
          <NavLinkItem href="/login" path={router.asPath}>
            Log In
          </NavLinkItem>
        </Button>
        <Link href="/login">
          <Button display={{ base: "flex", sm: "none" }} bgColor="transparent">
            <Icon as={IoLogIn} boxSize={6} />
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
