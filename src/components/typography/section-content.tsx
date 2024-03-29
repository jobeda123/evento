type SectionContentProps = { content: string };

export default function SectionContent({ content }: SectionContentProps) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {content}
    </p>
  );
}
