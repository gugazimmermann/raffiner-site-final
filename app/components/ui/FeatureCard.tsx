import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
  children,
}: FeatureCardProps) {
  return (
    <div className={`text-center p-8 rounded-2xl bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] hover:shadow-lg transition-shadow ${className}`}>
      <div className="w-16 h-16 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon name={icon} className="text-white" size="lg" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
}
