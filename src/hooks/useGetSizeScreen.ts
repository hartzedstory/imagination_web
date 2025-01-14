import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  MAX_WIDTH,
  MIN_WIDTH_LEFT_1,
  MIN_WIDTH_LEFT_2,
} from '../constants/StyleConstants';
import { isMobile } from 'react-device-detect';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export const useGetSizeScreen = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { innerWidth } = windowSize;
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const leftWidth = useMemo(() => {
    const prevLeft = (innerWidth - MAX_WIDTH) / 2;
    if (innerWidth - MAX_WIDTH < MIN_WIDTH_LEFT_2) {
      return 0;
    }
    if (innerWidth - MAX_WIDTH < MIN_WIDTH_LEFT_1) {
      return MIN_WIDTH_LEFT_2;
    }
    if (prevLeft <= MIN_WIDTH_LEFT_1) {
      return MIN_WIDTH_LEFT_1;
    }
    return (innerWidth - MAX_WIDTH) / 2;
  }, [innerWidth]);

  const rightWidth = useMemo(() => {
    const currentWidth = innerWidth - leftWidth - MAX_WIDTH;
    if (leftWidth <= MIN_WIDTH_LEFT_2 || currentWidth <= 200) {
      return 0;
    }
    return currentWidth;
  }, [innerWidth, leftWidth]);

  const preContentWidth = useMemo(() => {
    return innerWidth - leftWidth - rightWidth;
  }, [innerWidth, leftWidth, rightWidth]);

  const contentWidth = useMemo(
    () => (innerWidth >= MAX_WIDTH ? MAX_WIDTH : preContentWidth),
    [innerWidth, preContentWidth],
  );

  const onScroll = useCallback(() => {
    const html = document.querySelector('html');
    if (!html) return;
    const { height } = html.getBoundingClientRect();
    if (height !== windowSize.innerHeight) {
      setWindowSize(pre => ({ ...pre, innerHeight: height }));
    }
  }, [windowSize.innerHeight]);

  const isSmallDevice = useMemo(() => screen.height <= 852, []);
  const isReduceSize = useMemo(() => isMobile, []);

  const heightFallback = useMemo(
    () => (contentWidth / 1920) * 1080,
    [contentWidth],
  );

  const paddingSmallDevice = useMemo(
    () => (isSmallDevice ? heightFallback / 2 : 0),
    [heightFallback, isSmallDevice],
  );

  return {
    ...windowSize,
    onScroll,
    leftWidth,
    rightWidth,
    contentWidth,
    paddingSmallDevice,
    heightFallback,
    isReduceSize,
  };
};
