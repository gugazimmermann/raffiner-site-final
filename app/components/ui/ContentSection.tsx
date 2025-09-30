import type { ReactNode } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ContentSectionProps {
  title: string;
  description: string | string[];
  imageIcon?: string;
  imageText?: string;
  background?: "gradient" | "white";
  reverse?: boolean;
  className?: string;
  children?: ReactNode;
}

export function ContentSection({
  title,
  description,
  imageIcon,
  imageText,
  background = "white",
  reverse = false,
  className = "",
  children,
}: ContentSectionProps) {
  const backgroundClass = background === "gradient" 
    ? "bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)]"
    : "bg-white";

  const descriptions = Array.isArray(description) ? description : [description];

  return (
    <section className={`py-20 px-4 ${backgroundClass} ${className}`}>
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {!reverse && imageIcon && imageText && (
            <ImagePlaceholder icon={imageIcon} text={imageText} />
          )}
          
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
            {descriptions.map((desc, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6">
                {desc}
              </p>
            ))}
            {children}
          </div>

          {reverse && imageIcon && imageText && (
            <ImagePlaceholder icon={imageIcon} text={imageText} className="lg:col-start-1" />
          )}
        </div>
      </div>
    </section>
  );
}
