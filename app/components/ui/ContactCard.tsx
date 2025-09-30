import { Icon } from "./Icon";
import { Button } from "./Button";

interface ContactInfo {
  type: string;
  label: string;
  value: string;
  icon: string;
  color: string;
  href?: string;
}

interface ContactCardProps {
  contact: ContactInfo;
}

const colorStyles = {
  rose: "bg-rose-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-gradient-to-r from-purple-500 to-pink-500",
  gray: "bg-gray-500",
  red: "bg-red-500",
};

export function ContactCard({ contact }: ContactCardProps) {
  const iconColor = colorStyles[contact.color as keyof typeof colorStyles] || "bg-gray-500";

  return (
    <div className="flex items-center">
      <div className={`w-12 h-12 ${iconColor} rounded-full flex items-center justify-center mr-4`}>
        <Icon name={contact.icon} className="text-white" size="md" />
      </div>
      <div>
        {contact.href ? (
          <a 
            href={contact.href}
            target={contact.type === 'email' ? undefined : '_blank'}
            rel={contact.type === 'email' ? undefined : 'noopener noreferrer'}
            className="text-gray-600 hover:text-[rgb(63_9_22)] transition-colors duration-200 hover:underline cursor-pointer"
            title={contact.type === 'location' ? 'Clique para abrir no Google Maps' : undefined}
          >
            {contact.value}
          </a>
        ) : (
          <p className="text-gray-600">{contact.value}</p>
        )}
      </div>
    </div>
  );
}

export function ContactButton({ contact }: ContactCardProps) {
  if (!contact.href) return null;

  const buttonVariants = {
    whatsapp: "secondary" as const,
    instagram: "primary" as const,
    youtube: "primary" as const,
    email: "outline" as const,
  };

  const buttonText = {
    whatsapp: "Falar no WhatsApp",
    instagram: "Seguir no Instagram",
    youtube: "Ver Canal",
    email: "Enviar E-mail",
  };

  const variant = buttonVariants[contact.type as keyof typeof buttonVariants] || "primary";
  const text = buttonText[contact.type as keyof typeof buttonText] || contact.label;

  return (
    <Button
      href={contact.href}
      variant={variant}
      external
      className="w-full"
    >
      <Icon name={contact.icon} size="sm" />
      <span>{text}</span>
    </Button>
  );
}
