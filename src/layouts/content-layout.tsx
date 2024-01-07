import { Box } from "@chakra-ui/react";
import React from "react";

export default function ContentLayout({ children }: React.PropsWithChildren) {
  return (
    <Box as="article" py={4}>
      {children}
    </Box>
  );
}
