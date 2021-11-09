import ProductCard from "../components/ProductCard";
import products from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage </h1>
      <hr />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count}
            onCountChange={onProductCountChange}
          >
            <ProductCard.Image />
            <ProductCard.Title />

            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map(
          (product) =>
            product.count > 0 && (
              <ProductCard
                key={product.id}
                product={product}
                style={{ width: "110px" }}
                value={product.count}
                onCountChange={onProductCountChange}
              >
                <ProductCard.Image />
                <ProductCard.Buttons className="center-content" />
              </ProductCard>
            )
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
