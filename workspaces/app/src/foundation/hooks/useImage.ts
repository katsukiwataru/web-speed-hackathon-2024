import { useSyncExternalStore } from 'react';

import { getImageUrl } from '../../lib/image/getImageUrl';

const getDpr = () => (typeof window !== 'undefined' ? window.devicePixelRatio : 1);
const subscribe = () => () => {};

export const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const dpr = useSyncExternalStore(subscribe, getDpr, () => 1);

  return getImageUrl({
    format: 'webp',
    height: Math.round(height * dpr),
    imageId,
    width: Math.round(width * dpr),
  });
};
