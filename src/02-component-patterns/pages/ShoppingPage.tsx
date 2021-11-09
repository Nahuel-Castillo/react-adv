import ProductCard from "../components/ProductCard";

import "../styles/custom-styles.css";

const products = [{ id: 0, name: "Coffe Mug", img: "coffee-mug.png " }];

const ShoppingPage = () => {
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
          <>
            <ProductCard key={product.id} product={product}>
              <ProductCard.Image />
              <ProductCard.Title />

              <ProductCard.Buttons />
            </ProductCard>

            <ProductCard key={product.id} className="bg-dark" product={product}>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>

            <ProductCard key={product.id} product={product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
