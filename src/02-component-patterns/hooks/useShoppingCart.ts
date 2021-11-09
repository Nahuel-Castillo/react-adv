import { useState } from "react";
import { ProductInCart, ProductOnChangeArgs } from "../interfaces/product";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: ProductOnChangeArgs) => {
    setShoppingCart((prevState) => {
      const productInCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        return {
          ...prevState,
          [product.id]: { ...product, count: count + productInCart.count },
        };
      }

      // delete product from cart
      const { [product.id]: _, ...newState } = prevState;
      return newState;
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

export default useShoppingCart;
