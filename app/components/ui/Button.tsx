import { memo } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

const variantStyles = {
  primary: "bg-gradient-to-r from-[rgb(63_9_22)] to-[rgb(45_6_15)] text-white hover:from-[rgb(45_6_15)] hover:to-[rgb(63_9_22)] shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-[rgb(63_9_22)]/20",
  secondary: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-emerald-500/20",
  outline: "border-2 border-[rgb(63_9_22)] text-[rgb(63_9_22)] hover:bg-gradient-to-r hover:from-[rgb(63_9_22)] hover:to-[rgb(45_6_15)] hover:text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-[rgb(63_9_22)]/20",
  ghost: "text-gray-600 hover:text-[rgb(63_9_22)] hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = memo(function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  className = "",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
});
