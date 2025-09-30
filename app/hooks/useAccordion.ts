import { useState, useCallback } from "react";

export function useAccordion(initialOpenItems: number[] = []) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set(initialOpenItems));

  const toggleItem = useCallback((index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const isOpen = useCallback((index: number) => {
    return openItems.has(index);
  }, [openItems]);

  const openItem = useCallback((index: number) => {
    setOpenItems(prev => new Set([...prev, index]));
  }, []);

  const closeItem = useCallback((index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  const openAll = useCallback((totalItems: number) => {
    setOpenItems(new Set(Array.from({ length: totalItems }, (_, i) => i)));
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  return {
    openItems,
    toggleItem,
    isOpen,
    openItem,
    closeItem,
    openAll,
    closeAll,
  };
}
