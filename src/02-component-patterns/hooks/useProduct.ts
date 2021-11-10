import { useEffect, useRef, useState } from "react";
import {
  Product,
  ProductOnChangeArgs,
  InitialValues,
} from "../interfaces/product";

type UseProductArgs = {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onCountChange?: (value: ProductOnChangeArgs) => void;
};

const useProduct = ({
  initialValues,
  value = 0,
  product,
  onCountChange,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMountedRef = useRef(false);

  const increaseBy = (value: number = 1) => {
    let newCount = Math.max(counter + value, 0);

    newCount = initialValues?.maxCount
      ? Math.min(newCount, initialValues.maxCount)
      : newCount;

    setCounter(newCount);

    onCountChange && onCountChange({ product, count: newCount });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (isMountedRef.current) setCounter(value);
  }, [value]);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  });

  return {
    increaseBy,
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: counter === initialValues?.maxCount,
    reset,
  };
};

export default useProduct;
