import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";

const ProductTitle = ({ title = "" }) => {
  const { product } = useContext(ProductContext);

  title = title ? title : product.name;

  return <span className={styles.productDescription}>{title}</span>;
};

export default ProductTitle;
