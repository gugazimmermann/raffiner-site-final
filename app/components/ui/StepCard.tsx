import type { ReactNode } from "react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({
  step,
  title,
  description,
  className = "",
}: StepCardProps) {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="w-8 h-8 bg-[rgb(63_9_22)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <span className="text-white font-bold text-sm">{step}</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
