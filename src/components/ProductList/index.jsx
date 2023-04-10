import { Row, Col, theme } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({ products }) {
  const {
    token: { colorBgFooter, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div
      style={{
        backgroundColor: colorBgFooter,
        color: colorTextFooter,
      }}
    >
      <Row gutter={[32, 32]}>
        {products.map((product) => (
          <Col
            key={product.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            xxl={{ span: 4 }}
          >
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
