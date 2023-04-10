import { useState } from "react";
import { Row, Col } from "antd";
import Link from "../Link";
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu";
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode";

export default function Header({ title, slogan }) {
  const [isOnTouch, setIsOnTouch] = useState(false);

  return (
    <div className="container">
      <div>
        <header className={styles.header}>
          <HamburgerMenu
            onClick={() => setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch}
          />
          <NavBar
            open={isOnTouch}
            onClose={() => setIsOnTouch(false)}
            className={styles.navbar}
          />
          {/* <Row gutter={[32, 32]}>
            <Col
              sm={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
              xxl={{ span: 24 }}
            > */}
          <div className={styles.logo}>
            <Link to="/">
              <h1 className={styles.headerTitle}>{title}</h1>
            </Link>
            <p className={styles.headerSlogan}>{slogan}</p>
          </div>
          {/* </Col>
          </Row> */}

          <div className={styles.iconWrap}>
            <SetColorMode
              open={isOnTouch}
              onClose={() => setIsOnTouch(false)}
            />
            <CartSummary open={isOnTouch} onClose={() => setIsOnTouch(false)} />
          </div>
        </header>
      </div>
    </div>
  );
}
