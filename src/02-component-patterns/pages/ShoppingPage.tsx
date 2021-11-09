import ProductCard from "../components/ProductCard";

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
          </>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
