import { useYouTubeVideos } from '../../hooks/useYouTubeVideos';
import { YouTubeVideoCard } from './YouTubeVideoCard';

interface YouTubeVideosSectionProps {
  channelId: string;
  maxResults?: number;
}

export function YouTubeVideosSection({ channelId, maxResults = 3 }: YouTubeVideosSectionProps) {
  const { videos, loading, error } = useYouTubeVideos(channelId, maxResults);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-2xl h-80 animate-pulse">
            <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded mb-4 w-1/2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Erro ao carregar vídeos</h3>
          <p className="text-red-600 text-sm mb-4">
            Não foi possível carregar os vídeos do canal. Verifique sua conexão e tente novamente.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-red-600 hover:text-red-800 font-medium text-sm"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhum vídeo encontrado</h3>
          <p className="text-gray-600 text-sm">
            Ainda não há vídeos disponíveis no canal.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {videos.map((video) => (
        <YouTubeVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
