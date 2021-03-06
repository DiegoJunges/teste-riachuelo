import { useEffect, useState } from 'react';
import { BooksProps } from '../../pages/Books';

function usePersistState<S>(
  key: string,
  initialValue: S,
): [state: S, setState: React.Dispatch<S>] {
  const [state, setState] = useState<S>(() => {
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
