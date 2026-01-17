import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume";

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
};

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">About</h2>
      <div className="text-pretty font-mono text-sm text-foreground/70 print:text-[12px]" aria-labelledby="about-section">{summary}</div>
    </Section>
  );
};
