import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const aboutFilters = z.object({
  limit: z.number().catch(10).optional(),
  materialTypes: z.array(z.string()).catch([]).optional(),
  // search: z.string().catch("").optional(),
});

const AboutPage = () => {
  return <div>About Page</div>;
};

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  validateSearch: (
    search: Record<string, unknown>
  ): z.infer<typeof aboutFilters> => aboutFilters.parse(search),
});
