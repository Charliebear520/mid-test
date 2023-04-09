import { Row, Col } from "antd";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detail1 from "../../../src/assets/images/detail1.png";
import styles from "./detaillist.module.css";

export default function DetailList() {
  return (
    <div>
      <Row>
        <Col span={15} className={styles.image_col}>
          <img
            src={detail1}
            alt="detail"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Col>
        <Col span={9} className={styles.detail_col}>
          <Col>
            <Row span={8}>
              <div>
                <h1 className={styles.name}>
                  Efficacious care from root to tip
                </h1>
              </div>
            </Row>
            <Row span={8}>
              <div>
                <h3 className={styles.description}>
                  Our range of specialist solutions is instrumental in
                  refreshing roots, hydrating hair and composing coiffures of
                  all types.
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
      </Row>
    </div>
  );
}
