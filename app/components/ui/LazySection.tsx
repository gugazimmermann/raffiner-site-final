import { memo } from "react";
import type { ReactNode } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gradient" | "gray";
  padding?: "sm" | "md" | "lg";
  animation?: "fadeInUp" | "fadeIn" | "slideInRight";
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

const animationStyles = {
  fadeInUp: "animate-fade-in-up",
  fadeIn: "animate-fade-in",
  slideInRight: "animate-slide-in-right",
};

export const LazySection = memo(function LazySection({
  children,
  className = "",
  background = "white",
  padding = "lg",
  animation = "fadeInUp",
}: LazySectionProps) {
  const { ref, hasIntersected } = useLazyLoad();

  const combinedStyles = `${backgroundStyles[background]} ${paddingStyles[padding]} px-4 ${className}`;
  const animationClass = hasIntersected ? animationStyles[animation] : "";

  return (
    <section ref={ref} className={`${combinedStyles} ${animationClass}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
});
