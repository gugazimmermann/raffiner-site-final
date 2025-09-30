import type { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
  background?: "gradient" | "white";
  className?: string;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  highlightText,
  background = "gradient",
  className = "",
  children,
}: HeroSectionProps) {
  const backgroundClass = background === "gradient" 
    ? "bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]"
    : "bg-white";

  return (
    <section className={`py-20 px-4 ${backgroundClass} ${className}`}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          {highlightText ? (
            <>
              {title.split(highlightText)[0]}
              <span className="text-[rgb(63_9_22)]">{highlightText}</span>
              {title.split(highlightText)[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
