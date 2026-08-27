import Image from "next/image";

import { cn } from "@/lib/utils";

const LOGO = {
  src: "/brand/yellow-logo.jpg",
  alt: "Yellow — a tribute to Coldplay",
  width: 1024,
  height: 1024,
} as const;

type BrandMarkProps = {
  size: "nav" | "hero" | "footer";
  priority?: boolean;
  className?: string;
};

const sizeClass: Record<BrandMarkProps["size"], string> = {
  nav: "h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]",
  hero: "h-auto w-[min(88vw,34rem)] sm:w-[min(86vw,38rem)]",
  footer: "h-20 w-20 sm:h-24 sm:w-24",
};

export function BrandMark({ size, priority, className }: BrandMarkProps) {
  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={cn(
        "select-none object-contain mix-blend-lighten",
        sizeClass[size],
        className,
      )}
    />
  );
}
