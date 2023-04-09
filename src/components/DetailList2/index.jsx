import { Row, Col, theme } from "antd";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detail2 from "../../../src/assets/images/detail2.png";
import styles from "./detaillist2.module.css";

export default function DetailList2() {
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
      <Row gutter={[32, 32]} className={styles.section}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 9 }}
          xxl={{ span: 9 }}
          className={styles.detail_col}
        >
          <Row>
            <div className={styles.name}>
              <h1>Efficacious care from root to tip</h1>
            </div>
          </Row>
          <Row>
            <div className={styles.description}>
              <h3>
                Our range of specialist solutions is instrumental in refreshing
                roots, hydrating hair and composing coiffures of all types.
              </h3>
            </div>
          </Row>
          <Row>
            <Button className={styles.button}>
              <span style={{ marginRight: "4rem" }}>Discover Hair Care</span>
              <RightOutlined style={{ fontSize: "18px" }} />
            </Button>
          </Row>
        </Col>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 15 }}
          xxl={{ span: 15 }}
          className={styles.image_col}
        >
          <img
            src={detail2}
            alt="detail"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
}
