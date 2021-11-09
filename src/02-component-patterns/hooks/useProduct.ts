import { useEffect, useState } from "react";
import { Product, ProductOnChangeArgs } from "../interfaces/product";

type UseProductArgs = {
  product: Product;
  value?: number;
  onCountChange?: (value: ProductOnChangeArgs) => void;
};

const useProduct = ({ value = 0, product, onCountChange }: UseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number = 1) => {
    const newCount = Math.max(counter + value, 0);

    setCounter(newCount);

    onCountChange && onCountChange({ product, count: newCount });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { increaseBy, counter };
};

export default useProduct;
