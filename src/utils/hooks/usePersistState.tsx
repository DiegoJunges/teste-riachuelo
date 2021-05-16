import { useEffect, useState } from 'react';
import { BooksProps } from '../../pages/Books';

function usePersistState(key: string, initialValue: unknown) {
  const [state, setState] = useState<BooksProps[]>(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistState;
