import { Row, Col } from "antd";
import CategoryItem from "../CategoryItem";
import styles from "./categorylist.module.css";

export default function CategoryList({ categories }) {
  return (
    <Row gutter={[32, 32]} className={styles.section}>
      <Col
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        xxl={{ span: 24 }}
      >
        <div className={styles.head}>
          <h1 className={styles.logo}>Our Product</h1>
        </div>
      </Col>
      {categories.map((category) => (
        <Col
          key={category.id}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <CategoryItem category={category} />
        </Col>
      ))}
    </Row>
  );
}
