import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/styled-system";
import { NarDarkTheme, NarLightTheme } from "./utilities/colors";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("#F5E8C7", "#0F0F0F")(props),
    },
  }),
};

const colors = {
  narDark: {
    primary: "#8f163f",
    warning: "#8f163f",
    error: "#8f163f",
    borderFocus: "red.50",
    borderError: "red.600",
  },
  narLight: {
    primary: "#D81F74",
    warning: "#D81F74",
    error: "#D81F74",
    borderFocus: "green.400",
    borderError: "red.400",
  },
};

const components = {
  Input: {
    baseStyle: {
      borderColor: "green",
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
