import { pageMetadata } from "@/config/site";
import { ProjectDetail } from "@/components/project-detail";
export const metadata = pageMetadata(
  "Northstone Trade & Timber",
  "Explore a trade e-commerce concept with product discovery, sample stock guidance and a basket experience.",
  "/work/northstone",
);
export default function Page() {
  return <ProjectDetail index={1} />;
}
