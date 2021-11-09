import { createContext } from "react";

import useProduct from "../../hooks/useProduct";
import {
  ProductCounterProps,
  ProductCardProps,
} from "../../interfaces/product";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ increaseBy, product, counter }}>
      <div className={styles.productCard}>{children}</div>;
    </Provider>
  );
};

export default ProductCard;
