import NavBar from "@/components/navbar/navbar";
import { Box, Container } from "@chakra-ui/react";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <Box px={2} display="flex">
      <NavBar />
      <Container maxW="container.xl" h="100vh" pt={16}>
        {children}
      </Container>
    </Box>
  );
}
