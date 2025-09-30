import type { ReactNode } from "react";

interface ImagePlaceholderProps {
  icon: string;
  text: string;
  className?: string;
  children?: ReactNode;
}

export function ImagePlaceholder({
  icon,
  text,
  className = "",
  children,
}: ImagePlaceholderProps) {
  return (
    <div className={`bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] rounded-2xl h-96 flex items-center justify-center ${className}`}>
      <div className="text-center">
        <svg className="w-24 h-24 text-[rgb(63_9_22)] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
        <p className="text-gray-600 font-medium">{text}</p>
        {children}
      </div>
    </div>
  );
}
