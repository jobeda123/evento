import { cn } from "@/lib/utils/functions";

type PageTitleProps = { title: string; className?: string };

export default function PageTitle({ title, className }: PageTitleProps) {
  return (
    <h1
      className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}
    >
      {title}
    </h1>
  );
}
