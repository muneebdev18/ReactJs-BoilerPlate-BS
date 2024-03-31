// import { useState } from 'react';

export const usePost = (url) => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const postData = async (data) => {
    // setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // setLoading(false);
      return response.json();
    } catch (error) {
      // setError(error);
      // setLoading(false);
      console.log(`${error.message} in ${url}`);
    }
  };

  return { postData};
};

// export default usePost;
