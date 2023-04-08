import { Col, Row } from "antd";
import styles from "./intro.module.css";
import image from "../../assets/images/bg.png";

export default function Intro() {
  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.container}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "100vw",
                height: "100vh",
              }}
            >
              <h1>Hello World</h1>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
