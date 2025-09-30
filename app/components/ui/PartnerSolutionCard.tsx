import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface PartnerSolutionCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  className?: string;
}

export function PartnerSolutionCard({
  title,
  description,
  icon,
  features,
  className = "",
}: PartnerSolutionCardProps) {
  return (
    <div className={`bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:-translate-y-1 ${className}`}>
      <div className="w-16 h-16 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon name={icon} className="text-white" size="lg" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-[rgb(63_9_22)] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
