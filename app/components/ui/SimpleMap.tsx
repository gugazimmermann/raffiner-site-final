interface SimpleMapProps {
  latitude: number;
  longitude: number;
  address: string;
  className?: string;
}

export function SimpleMap({ latitude, longitude, address, className = "" }: SimpleMapProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.003},${latitude-0.003},${longitude+0.003},${latitude+0.003}&layer=mapnik&marker=${latitude},${longitude}`;
  
  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={mapUrl}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa do showroom - ${address}`}
      />
    </div>
  );
}
