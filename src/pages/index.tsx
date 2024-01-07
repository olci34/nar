import SearchBox from "@/components/search-box/search-box";
import ContentLayout from "@/layouts/content-layout";
import { Box, Center } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContentLayout>
      <Center>HelloWorld</Center>
    </ContentLayout>
  );
}
