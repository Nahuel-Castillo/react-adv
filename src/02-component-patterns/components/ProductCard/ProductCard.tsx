import { createContext, CSSProperties, ReactElement } from "react";

import useProduct from "../../hooks/useProduct";
import { Product, ProductCounterProps } from "../../interfaces/product";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  className?: string;
  children?: ReactElement[] | ReactElement;
  style?: CSSProperties;
}

const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ increaseBy, product, counter }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
