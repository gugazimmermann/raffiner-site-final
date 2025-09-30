import { memo } from "react";
import { SVG_ICONS } from "../../lib/icons";

interface IconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export const Icon = memo(function Icon({ name, className = "", size = "md" }: IconProps) {
  const path = SVG_ICONS[name as keyof typeof SVG_ICONS];
  
  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const strokeIcons = ['menu', 'chevronDown', 'chevronLeft', 'chevronRight', 'plus', 'minus', 'location', 'email', 'globe', 'image', 'user', 'heart', 'lightning', 'check', 'checkCircle', 'arrowUpDown', 'calendar', 'building', 'users', 'box', 'grid', 'book', 'lightbulb', 'clipboard', 'creditCard', 'download', 'x', 'mapPin', 'warning', 'document', 'layers'];
  const isStrokeIcon = strokeIcons.includes(name);

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`} 
      fill={isStrokeIcon ? "none" : "currentColor"}
      stroke={isStrokeIcon ? "currentColor" : "none"}
      strokeWidth={isStrokeIcon ? "2" : "0"}
      strokeLinecap={isStrokeIcon ? "round" : "butt"}
      strokeLinejoin={isStrokeIcon ? "round" : "miter"}
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  );
});
