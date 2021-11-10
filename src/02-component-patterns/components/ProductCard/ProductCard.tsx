import { createContext, CSSProperties, ReactElement } from "react";

import useProduct from "../../hooks/useProduct";
import {
  InitialValues,
  Product,
  ProductCounterProps,
  ProductOnChangeArgs,
} from "../../interfaces/product";

import styles from "../../styles/styles.module.css";
import { ProductCardHandlers } from "../../interfaces/product";

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: InitialValues;
  onCountChange?: (args: ProductOnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

const ProductCard = ({
  children,
  className,
  initialValues,
  onCountChange,
  product,
  style,
  value = 0,
}: Props) => {
  const { increaseBy, counter, maxCount, isMaxCountReached, reset } =
    useProduct({
      onCountChange,
      initialValues,
      product,
      value,
    });

  return (
    <Provider
      value={{
        increaseBy,
        product,
        counter,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
