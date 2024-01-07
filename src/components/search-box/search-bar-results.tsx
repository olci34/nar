import getSearchBarResults from "@/api/getSearchBarResults";
import { Box, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

interface SearchBarResultsProps {
  searchTerm: string;
}

export type SearchBarResult = {
  keyword: string;
};

export default function SearchBarResults({
  searchTerm,
}: SearchBarResultsProps) {
  const { data, isLoading, error } = useSWR(
    searchTerm ? searchTerm : null,
    getSearchBarResults
  );

  if (isLoading) return <Spinner size="xl" />;
  else if (error)
    return (
      <Box>
        <Heading>Error</Heading>
      </Box>
    );
  else if (data) {
    return (
      <List>
        {data.map((res, i) => {
          return <ListItem key={`${res}-${i}`}>{res.keyword}</ListItem>;
        })}
      </List>
    );
  }
}
