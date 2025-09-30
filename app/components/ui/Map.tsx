import { useEffect, useRef } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
  className?: string;
}

export function Map({ latitude, longitude, address, className = "" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const loadLeaflet = async () => {
      const L = await import('leaflet');
      
      await import('leaflet/dist/leaflet.css');

      const map = L.map(mapRef.current!).setView([latitude, longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(`<b>Raffiner Showroom</b><br>${address}`).openPopup();

      mapInstanceRef.current = map;
    };

    loadLeaflet().catch(console.error);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, address]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}
