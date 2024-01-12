import { NarDarkTheme, NarLightTheme } from "@/lib/utilities/colors";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export default function ThemeButton() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display="inline-block">
      <IconButton
        bgColor={useColorModeValue("gray.900", "gray.200")}
        color={useColorModeValue(NarDarkTheme.Primary, NarLightTheme.Primary)}
        aria-label="Theme button"
        icon={useColorModeValue(<FaMoon />, <IoSunny />)}
        onClick={toggleColorMode}
      ></IconButton>
    </Box>
  );
}
