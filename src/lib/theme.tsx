import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import {
  defineStyle,
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { stepperAnatomy as stepperParts } from "@chakra-ui/anatomy";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("#F5E8C7", "#0F0F0F")(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
});

export default theme;
