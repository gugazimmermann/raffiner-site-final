interface YouTubeVideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    url: string;
  };
}

export function YouTubeVideoCard({ video }: YouTubeVideoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateTitle = (title: string, maxLength: number = 60) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
      <div className="relative" onClick={() => window.open(video.url, '_blank')}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {formatDate(video.publishedAt)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {truncateTitle(video.title)}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {video.description}
        </p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[rgb(63_9_22)] font-semibold hover:text-[rgb(80_20_30)] transition-colors duration-200"
        >
          <span>Assistir no YouTube</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
