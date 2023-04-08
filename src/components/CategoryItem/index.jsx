import Link from "../Link";
import styles from "./categoryitem.module.css";

export default function CategoryItem({ category }) {
  return (
    <div className={styles.item}>
      <Link to={`/categories/id/${category.id}`}>
        <img
          style={{ width: "100%" }}
          src={category.image}
          alt={category.name}
        />
      </Link>
      <h3 className={styles.name}>{category.name}</h3>
      {/* <div className={styles.info}>
        <h6 className={styles.category}>{product.category}</h6>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
      </div> */}
    </div>
  );
}
