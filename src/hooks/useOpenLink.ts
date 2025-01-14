import React, { useCallback } from 'react';

const useOpenLink = () => {
  const openLink = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement | HTMLElement, MouseEvent>,
      url: string,
    ) => {
      e.stopPropagation();
      window.open(url, '_blank');
    },
    [],
  );

  return { openLink };
};

export default useOpenLink;
