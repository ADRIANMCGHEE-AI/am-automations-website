export function ProjectName({ title }: { title: string }) {
  const suffix = "Follow-Ups";
  if (!title.endsWith(suffix)) return <>{title}</>;
  return (
    <>
      {title.slice(0, -suffix.length)}
      <span className="keep-together">{suffix}</span>
    </>
  );
}
