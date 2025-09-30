import { useState, useEffect, useCallback, useRef } from "react";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

interface UseCacheOptions {
  ttl?: number;
  maxSize?: number;
}

class MemoryCache {
  private cache = new Map<string, CacheEntry<any>>();
  private maxSize: number;

  constructor(maxSize = 100) {
    this.maxSize = maxSize;
  }

  set<T>(key: string, data: T, ttl: number): void {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

const globalCache = new MemoryCache();

export function useCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: UseCacheOptions = {}
) {
  const { ttl = 5 * 60 * 1000, maxSize = 100 } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    const cachedData = globalCache.get<T>(key);
    if (cachedData) {
      setData(cachedData);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      
      if (!abortControllerRef.current.signal.aborted) {
        setData(result);
        globalCache.set(key, result, ttl);
      }
    } catch (err) {
      if (!abortControllerRef.current.signal.aborted) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    } finally {
      if (!abortControllerRef.current.signal.aborted) {
        setLoading(false);
      }
    }
  }, [key, fetcher, ttl]);

  const invalidate = useCallback(() => {
    globalCache.delete(key);
    setData(null);
  }, [key]);

  const refresh = useCallback(() => {
    invalidate();
    fetchData();
  }, [invalidate, fetchData]);

  useEffect(() => {
    fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    invalidate,
    refresh,
    isCached: globalCache.has(key),
  };
}

export function useCacheValue<T>(key: string, ttl = 5 * 60 * 1000) {
  const [data, setData] = useState<T | null>(() => globalCache.get<T>(key));

  const setCacheValue = useCallback((value: T) => {
    globalCache.set(key, value, ttl);
    setData(value);
  }, [key, ttl]);

  const getCacheValue = useCallback(() => {
    return globalCache.get<T>(key);
  }, [key]);

  const invalidateCache = useCallback(() => {
    globalCache.delete(key);
    setData(null);
  }, [key]);

  return {
    data,
    setCacheValue,
    getCacheValue,
    invalidateCache,
    isCached: globalCache.has(key),
  };
}

export function clearAllCache(): void {
  globalCache.clear();
}

export function getCacheStats() {
  return {
    size: globalCache.size(),
    maxSize: 100,
  };
}
