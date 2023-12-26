import { useState } from 'react';

import { PROJECT_LIST } from './Sidebar.constants';

export function useSidebar() {
  const [activeItemId, setActiveItemId] = useState<number>(PROJECT_LIST[4].id);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return {
    activeItemId,
    isOpen,
    setActiveItemId,
    setIsOpen,
  };
}
