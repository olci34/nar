import NavBar from "@/components/navbar/navbar";
import { Box, Container } from "@chakra-ui/react";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <Box as="main" px={2}>
      <Box
        pos="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: "blur(5px)" }}
        zIndex={2}
        borderBottom="1px"
        borderColor="gray.400"
        py={2}
      >
        <Container maxW="container.lg">
          <NavBar />
        </Container>
      </Box>
      <Container maxW="container.xl" h="100vh" pt={16}>
        {children}
      </Container>
    </Box>
  );
}
