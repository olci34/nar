import useDebounce from "@/hooks/useDebounce";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchBarProps {
  searchVal: string;
  setSearchVal: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ searchVal, setSearchVal }: SearchBarProps) {
  const search = () => {
    console.log(`Redirect to /search?q=${searchVal}`);
  };

  return (
    <InputGroup>
      <InputLeftElement onClick={search} pointerEvents="fill">
        <Icon as={FaMagnifyingGlass} />
      </InputLeftElement>
      <Input
        placeholder="Search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.currentTarget.value)}
        onKeyDown={(e) => (e.key === "Enter" ? search() : null)}
      />
    </InputGroup>
  );
}
