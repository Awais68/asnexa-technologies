type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[720px]"}>
      <div className={align === "center" ? "eyebrow justify-center" : "eyebrow"}>{eyebrow}</div>
      <h2 className="heading mt-5">{title}</h2>
      {description ? <p className="body-copy mt-5 max-w-[650px]">{description}</p> : null}
    </div>
  );
}