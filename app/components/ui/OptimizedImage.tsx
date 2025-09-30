import { memo, useState, useCallback } from "react";
import { Skeleton } from "./Skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNWY3Ii8+PC9zdmc+",
  loading = "lazy",
  width,
  height,
  sizes,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <Skeleton 
          variant="rectangular" 
          width={width} 
          height={height}
          className="absolute inset-0"
        />
      )}
      
      {hasError ? (
        <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-rose-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-sm">Imagem não disponível</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : loading}
          width={width}
          height={height}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </div>
  );
});
