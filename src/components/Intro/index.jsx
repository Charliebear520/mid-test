import { Col, Row } from "antd";
import styles from "./intro.module.css";
import image from "../../assets/images/bg.png";

export default function Intro() {
  return (
    <div className={styles.container}>
      <Row gutter={[32, 32]}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.photo}>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                testAlign: "center",
                top: 0,
                left: 0,
                // padding: "50px",
                width: "100%",
                height: "100vh",
              }}
            >
              <h1>Hello World</h1>
              <p>This is my Website</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
