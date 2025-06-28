import { useState, useEffect } from 'react';

export function useContent<T>(filePath: string): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to load content from ${filePath}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [filePath]);

  return { data, loading, error };
}