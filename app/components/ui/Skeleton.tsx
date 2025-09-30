import { memo } from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: "text" | "rectangular" | "circular";
  animation?: "pulse" | "wave" | "none";
}

export const Skeleton = memo(function Skeleton({
  className = "",
  width,
  height,
  variant = "rectangular",
  animation = "pulse",
}: SkeletonProps) {
  const baseClasses = "bg-gray-200";
  
  const variantClasses = {
    text: "h-4 rounded",
    rectangular: "rounded",
    circular: "rounded-full",
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite]",
    none: "",
  };

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
});

export const SkeletonText = memo(function SkeletonText({ 
  lines = 1, 
  className = "" 
}: { 
  lines?: number; 
  className?: string; 
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? "75%" : "100%"}
          height="1rem"
        />
      ))}
    </div>
  );
});

export const SkeletonCard = memo(function SkeletonCard({ 
  className = "" 
}: { 
  className?: string; 
}) {
  return (
    <div className={`p-4 border border-gray-200 rounded-lg ${className}`}>
      <Skeleton variant="rectangular" height="200px" className="mb-4" />
      <SkeletonText lines={2} className="mb-2" />
      <Skeleton variant="text" width="60%" height="1rem" />
    </div>
  );
});

export const SkeletonAvatar = memo(function SkeletonAvatar({ 
  size = 40, 
  className = "" 
}: { 
  size?: number; 
  className?: string; 
}) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
});
