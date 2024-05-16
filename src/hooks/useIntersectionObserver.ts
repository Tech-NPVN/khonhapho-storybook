import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (fetchNextApi: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      setIsLoading(true);
      if (target.isIntersecting) {
        setTimeout(() => {
          fetchNextApi();
        }, 1000);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);
  return { isLoading, setIsLoading, loaderRef, fetchNextApi };
};

export default useIntersectionObserver;
