import { useEffect, useRef, useState } from "react";
import { Product, ProductOnChangeArgs } from "../interfaces/product";

type UseProductArgs = {
  product: Product;
  value?: number;
  onCountChange?: (value: ProductOnChangeArgs) => void;
};

const useProduct = ({ value = 0, product, onCountChange }: UseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onCountChange);

  const increaseBy = (newValue: number = 1) => {
    if (isControlled.current) {
      return onCountChange!({ count: newValue, product });
    }

    setCounter(Math.max(counter + newValue, 0));
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { increaseBy, isControlled, counter };
};

export default useProduct;
