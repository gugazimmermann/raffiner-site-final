import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gradient" | "gray";
  padding?: "sm" | "md" | "lg";
}

const backgroundStyles = {
  white: "bg-white",
  gradient: "bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]",
  gray: "bg-gray-50",
};

const paddingStyles = {
  sm: "py-8",
  md: "py-16",
  lg: "py-20",
};

export function Section({
  children,
  className = "",
  background = "white",
  padding = "md",
}: SectionProps) {
  const combinedStyles = `${backgroundStyles[background]} ${paddingStyles[padding]} px-4 ${className}`;
  
  return (
    <section className={combinedStyles}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
