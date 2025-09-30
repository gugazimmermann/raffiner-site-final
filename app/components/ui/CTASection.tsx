import type { ReactNode } from "react";
import { Button } from "./Button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  background?: "gradient" | "white";
  className?: string;
  children?: ReactNode;
}

export function CTASection({
  title,
  subtitle,
  background = "white",
  className = "",
  children,
}: CTASectionProps) {
  const backgroundClass = background === "gradient" 
    ? "bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]"
    : "bg-white";

  return (
    <section className={`py-20 px-4 ${backgroundClass} ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
