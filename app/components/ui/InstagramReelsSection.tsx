import { useInstagramReels } from '../../hooks/useInstagramReels';

interface InstagramReelsSectionProps {
  username: string;
  maxResults?: number;
}

export function InstagramReelsSection({ username, maxResults = 3 }: InstagramReelsSectionProps) {
  const { reels, loading, error } = useInstagramReels(username, maxResults);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
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
          <h3 className="text-lg font-semibold text-red-800 mb-2">Erro ao carregar Reels</h3>
          <p className="text-red-600 text-sm mb-4">
            Não foi possível carregar os Reels do Instagram. Verifique sua conexão e tente novamente.
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

  if (!reels || reels.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhum Reel encontrado</h3>
          <p className="text-gray-600 text-sm">
            Ainda não há Reels disponíveis no Instagram.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {reels.map((reel) => (
        <div key={reel.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
          <div className="relative h-64 overflow-hidden">
            <img
              src={reel.thumbnail_url || reel.media_url}
              alt={reel.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transform hover:scale-110 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm line-clamp-3 mb-2">
              {reel.caption}
            </p>
            <p className="text-gray-400 text-xs">
              {new Date(reel.timestamp).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
