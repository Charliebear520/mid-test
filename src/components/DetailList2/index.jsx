import { Row, Col } from "antd";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detail2 from "../../../src/assets/images/detail2.png";
import styles from "./detaillist2.module.css";

export default function DetailList2() {
  return (
    <div>
      <Row>
        <Col span={9} className={styles.detail_col}>
          <Col>
            <Row span={8}>
              <div>
                <h1 className={styles.name}>Store Locator</h1>
              </div>
            </Row>
            <Row span={8}>
              <div>
                <h3 className={styles.description}>
                  Our consultants are available to host you in-store  and
                  provide tailored guidance on gift purchases. 
                </h3>
              </div>
            </Row>
            <Row span={8}>
              <div>
                <Button className={styles.button}>
                  <span style={{ marginRight: "4rem" }}>
                    Discover Hair Care
                  </span>
                  <RightOutlined style={{ fontSize: "18px" }} />
                </Button>
              </div>
            </Row>
          </Col>
        </Col>
        <Col span={15} className={styles.image_col}>
          <img
            src={detail2}
            alt="detai2"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
}
