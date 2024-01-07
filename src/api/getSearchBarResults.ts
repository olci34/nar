import { SearchBarResult } from "@/components/search-box/search-bar-results";

const MATCHING_KEYWORDS = (term: string): SearchBarResult[] => {
  return [
    { keyword: `${term} matchin keyword 1` },
    { keyword: `${term} matchin keyword 2` },
    { keyword: `${term} matchin keyword 3` },
    { keyword: `${term} matchin keyword 4` },
  ];
};

export default function getSearchBarResults(
  searchTerm: string
): Promise<SearchBarResult[]> {
  //API: Fetch searchTerm matching keywords
  return new Promise((resolve) =>
    setTimeout(() => resolve(MATCHING_KEYWORDS(searchTerm)), 2000)
  );
}
