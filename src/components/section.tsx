type SectionProps = { children: React.ReactNode };

export default function Section({ children }: SectionProps) {
  return <section className="mb-12"> {children}</section>;
}
