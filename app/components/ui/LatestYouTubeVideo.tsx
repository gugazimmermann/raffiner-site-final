import { memo, useState } from 'react';
import { useYouTubeVideos } from '../../hooks/useYouTubeVideos';
import { Skeleton } from './Skeleton';

interface LatestYouTubeVideoProps {
  channelId: string;
}

export const LatestYouTubeVideo = memo(function LatestYouTubeVideo({ channelId }: LatestYouTubeVideoProps) {
  const { videos, loading, error } = useYouTubeVideos(channelId, 1);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (loading) {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
        <Skeleton 
          variant="rectangular" 
          height="320px" 
          className="w-full"
        />
      </div>
    );
  }

  if (error || !videos || videos.length === 0) {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
        <div className="relative w-full h-80 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-[rgb(63_9_22)] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <p className="text-gray-600 font-medium">Vídeo em breve</p>
          </div>
        </div>
      </div>
    );
  }

  const latestVideo = videos?.[0];

  if (!latestVideo) {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
        <div className="relative w-full h-80 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-[rgb(63_9_22)] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <p className="text-gray-600 font-medium">Vídeo em breve</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
      <div className="relative w-full h-80">
        {!iframeLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(240_238_235)] via-[rgb(221_218_212)] to-[rgb(200_197_192)] flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(63_9_22)] mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium">Carregando vídeo...</p>
            </div>
          </div>
        )}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${latestVideo.id}?rel=0&modestbranding=1&showinfo=0`}
          title={latestVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIframeLoaded(true)}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
});
