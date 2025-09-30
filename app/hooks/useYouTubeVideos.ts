import { useCache } from './useCache';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

export function useYouTubeVideos(channelId: string, maxResults: number = 3) {
  const cacheKey = `youtube-videos-${channelId}-${maxResults}`;
  
  const { data: videos = [], loading, error } = useCache<YouTubeVideo[]>(
    cacheKey,
    async () => {
      const API_KEY = 'AIzaSyATie2u0O1dIA0FZR5qu3F7LBAaLUbS0x4';
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data = await response.json();
      
      const videoList: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

      return videoList;
    },
    {
      ttl: 10 * 60 * 1000,
    }
  );

  return { 
    videos, 
    loading, 
    error: error?.message || null 
  };
}
