import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  title = title ? title : product.name;

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title}
    </span>
  );
};

export default ProductTitle;
