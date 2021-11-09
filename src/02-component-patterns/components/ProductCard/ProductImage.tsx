import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import noImage from "../../assets/no-image.jpg";
import styles from "../../styles/styles.module.css";

const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  const image = img ? img : product.img ? product.img : noImage;

  return <img className={styles.productImg} src={image} alt="Product" />;
};

export default ProductImage;
