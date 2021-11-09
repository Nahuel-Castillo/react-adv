import { ProductCardHOCProps } from "../../interfaces/product";
import { default as ProductCardHOC } from "./ProductCard";
import ProductTitle from "./ProductTitle";
import ProductImage from "./ProductImage";
import ProductButtons from "./ProductButtons";

export { ProductTitle, ProductImage, ProductButtons };

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
