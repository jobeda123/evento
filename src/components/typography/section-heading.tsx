type SectionHeadingProps = { title: string };

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="text-2xl mb-8">{title}</h2>;
}
