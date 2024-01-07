import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedVal;
}
