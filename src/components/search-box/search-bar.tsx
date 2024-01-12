import { NarDarkTheme, NarLightTheme } from "@/lib/utilities/colors";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
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
      <InputLeftElement onClick={search} cursor="pointer">
        <Icon
          as={FaMagnifyingGlass}
          color={useColorModeValue(NarLightTheme.Primary, NarDarkTheme.Primary)}
        />
      </InputLeftElement>
      <Input
        placeholder="Search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.currentTarget.value)}
        onKeyDown={(e) => (e.key === "Enter" ? search() : null)}
        focusBorderColor={useColorModeValue(
          NarLightTheme.BorderFocus,
          NarDarkTheme.BorderFocus
        )}
        errorBorderColor={useColorModeValue(
          NarLightTheme.Error,
          NarDarkTheme.Error
        )}
      />
    </InputGroup>
  );
}
