import ProductCard from "../components/ProductCard";
import products from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage </h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ product, count, increaseBy, reset, maxCount }) => (
          <>
            <ProductCard.Image img={product.img} />
            <ProductCard.Title title={product.name} />

            <ProductCard.Buttons />

            <button onClick={reset}>Reset</button>

            <button onClick={() => increaseBy(-2)}>-2</button>

            {maxCount && maxCount >= count + 2 && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
