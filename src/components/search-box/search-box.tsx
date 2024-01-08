import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import SearchBar from "./search-bar";
import useDebounce from "@/hooks/useDebounce";
import SearchBarResults from "./search-bar-results";

export default function SearchBox() {
  const [searchVal, setSearchVal] = useState("");
  const debouncedVal = useDebounce(searchVal, 500);

  //TODO: Add Search Results when typing
  return (
    <Flex direction={"row"} gap={4} w="full">
      <Box flex={1}>
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      </Box>
    </Flex>
  );
}
