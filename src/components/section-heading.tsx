import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  index: string;
  className?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function SectionHeading({
  kicker,
  title,
  index,
  className,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="font-display text-[0.7rem] tracking-[0.42em] text-gold uppercase">
        <span className="text-ember/90">{index}</span>
        <span className="mx-3 text-gold/40">/</span>
        {kicker}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[0.95] tracking-[0.06em] text-foreground uppercase sm:text-5xl md:text-6xl",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </header>
  );
}
