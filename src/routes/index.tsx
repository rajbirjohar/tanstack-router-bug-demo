import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const indexFilters = z.object({
  search: z.string().catch("").optional(),
});

const IndexPage = () => {
  return <div>Index Page</div>;
};

type IndexPageProps = z.infer<typeof indexFilters>;

export const Route = createFileRoute("/")({
  component: IndexPage,
  validateSearch: (search: Record<string, unknown>): IndexPageProps =>
    indexFilters.parse(search),
});
