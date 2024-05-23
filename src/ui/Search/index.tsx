import { useSearch } from "@tanstack/react-router";

const Search = () => {
  const { search, limit, materialTypes } = useSearch({
    strict: false,
    experimental_returnIntersection: true,
  });

  return (
    <div>
      <h1>Search</h1>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
};

export default Search;
