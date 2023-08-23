import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      "*": {
        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
      },
    },
  },
});

export default theme;
