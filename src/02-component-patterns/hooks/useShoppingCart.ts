import { useState } from "react";
import { ProductInCart, ProductOnChangeArgs } from "../interfaces/product";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: ProductOnChangeArgs) => {
    setShoppingCart((prevState) => {
      if (count === 0) {
        const { [product.id]: _, ...rest } = prevState;
        return rest;
      }

      return {
        ...prevState,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCart;
