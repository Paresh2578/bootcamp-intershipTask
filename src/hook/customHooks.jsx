import { useState, useEffect } from 'react';

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function useCurrHeight() {
  const [currHeight, setCurrHeight] = useState({
    height: document.body.scrollTop || document.documentElement.scrollTop,
  });

  useEffect(() => {
    function handleScroll() {
      setCurrHeight({
        height: document.body.scrollTop || document.documentElement.scrollTop,
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currHeight;
}


export {useWindowDimensions , useCurrHeight};