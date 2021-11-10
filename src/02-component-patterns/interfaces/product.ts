import { Props as ProductButtonsProps } from "../components/ProductCard/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductImageProps } from "../components/ProductCard/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductCard/ProductTitle";

export interface Product {
  id: number;
  img?: string;
  name: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductCounterProps {
  counter: number;
  maxCount?: number;
  increaseBy: (value?: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
}

export interface ProductOnChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value?: number) => void;
  reset: () => void;
}
