import { useState, useEffect } from 'react';
import useSWR from 'swr';

// Normal Fetching
 export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
};

// Fetch Hook SWR

export const useFetchSWR = (url)=>{
  const { data, error, isValidating } = useSWR(url, async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  return { data, error, loading: isValidating };
}

// Fetch Hook SWR - Bearer Token

export const useAuthorizedSWRFetch = (url, token) => {
  const { data, error, isValidating } = useSWR(url, async (url) => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  return { data, error, loading: isValidating };

};