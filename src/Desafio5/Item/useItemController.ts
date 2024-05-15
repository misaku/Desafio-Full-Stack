import { useRef, useState } from "react";

export const useItemController = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => setCount(count + 1);
  const renderCounter = useRef(0);
  renderCounter.current += 1;
  return { count, addCount, renderCounter: renderCounter.current };
};
