import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement[];
}

export interface Product {
  id: number;
  name: string;
  img?: string;
}

export interface ProductCounterProps {
  counter: number;
  increaseBy: (value?: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
