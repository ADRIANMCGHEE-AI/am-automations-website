import { pageMetadata } from "@/config/site";
import { ProjectDetail } from "@/components/project-detail";
export const metadata = pageMetadata(
  "Automated Quotation Follow-Ups",
  "Explore an interactive quotation follow-up simulation with scheduled reminders, a simulated inbox and customer replies.",
  "/work/automated-follow-ups",
);
export default function Page() {
  return <ProjectDetail index={0} />;
}
