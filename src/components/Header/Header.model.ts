import { useState } from 'react';

import { NAV_LIST } from './Header.constants';

export function useHeader() {
  const [activeItemId, setActiveItemId] = useState<number>(NAV_LIST[0].id);

  return {
    activeItemId,
    setActiveItemId,
  };
}
