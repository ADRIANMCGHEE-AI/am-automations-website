import { ButtonLink, PageIntro } from "@/components/ui";
export default function NotFound() {
  return (
    <div className="not-found">
      <PageIntro
        eyebrow="404 / PAGE NOT FOUND"
        title="Let’s get you back on track."
      >
        This page could not be found. Explore our work or head back to the
        homepage.
      </PageIntro>
      <div className="container">
        <ButtonLink href="/">Back to Home</ButtonLink>
      </div>
    </div>
  );
}
