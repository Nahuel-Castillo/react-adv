import { CSSProperties, useCallback, useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => (maxCount ? counter >= maxCount : false),
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => increaseBy()}
      >
        +
      </button>
    </div>
  );
};

export default ProductButtons;
