import { Button } from "./Button";
import { Icon } from "./Icon";

interface SocialButtonProps {
  platform: "whatsapp" | "instagram" | "youtube" | "email";
  href: string;
  text?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const platformConfig = {
  whatsapp: {
    icon: "whatsapp",
    defaultText: "Falar no WhatsApp",
    defaultVariant: "secondary" as const,
  },
  instagram: {
    icon: "instagram",
    defaultText: "Seguir no Instagram",
    defaultVariant: "primary" as const,
  },
  youtube: {
    icon: "youtube",
    defaultText: "Ver Canal",
    defaultVariant: "primary" as const,
  },
  email: {
    icon: "email",
    defaultText: "Enviar E-mail",
    defaultVariant: "outline" as const,
  },
};

export function SocialButton({
  platform,
  href,
  text,
  variant,
  size = "md",
  className = "",
}: SocialButtonProps) {
  const config = platformConfig[platform];
  
  return (
    <Button
      href={href}
      variant={variant || config.defaultVariant}
      size={size}
      external
      className={className}
    >
      <Icon name={config.icon} size="sm" />
      <span>{text || config.defaultText}</span>
    </Button>
  );
}
