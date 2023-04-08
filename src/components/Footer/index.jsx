import { theme } from "antd";
import styles from "./footer.module.css";

export default function Footer() {
  const {
    token: { colorBgFooter, colorTextFooter },
  } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: colorBgFooter,
        color: colorTextFooter,
      }}
    >
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.content}>
            <p style={{ fontWeight: 800 }}>DESCRIPTIONS</p>
            <hr className={styles.hrFooterLine} />
            <p style={{ textIndent: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe
              excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa
              debitis error!
            </p>
          </div>
          <div className={styles.followUs}>
            <p style={{ fontWeight: 800 }}>FOLLOW US</p>
            <hr className={styles.hrFooterLine} />
            <div className={styles.iconsArea}>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-facebook.svg"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-tiktok.svg"
                  alt="tiktok"
                />
              </a>
            </div>
          </div>
          <div className={styles.contactUs}>
            <p style={{ fontWeight: 800 }}>CONTACT US</p>
            <hr className={styles.hrFooterLine} />
            <p>02 2732 1104</p>
          </div>
          <div className={styles.Location}>
            <p style={{ fontWeight: 800 }}>Location</p>
            <hr className={styles.hrFooterLine} />
            <p>02 2732 1104</p>
          </div>

          <div className={styles.content2}>
            <p style={{ fontWeight: 800 }}>DESCRIPTIONS</p>
            <hr className={styles.hrFooterLine} />
            <p style={{ textIndent: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe
              excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa
              debitis error!
            </p>
          </div>
          <div className={styles.followUs2}>
            <p style={{ fontWeight: 800 }}>FOLLOW US</p>
            <hr className={styles.hrFooterLine} />
            <div className={styles.iconsArea}>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-facebook.svg"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  className={styles.icon}
                  src="/images/nn-icon-tiktok.svg"
                  alt="tiktok"
                />
              </a>
            </div>
          </div>
          <div className={styles.contactUs2}>
            <p style={{ fontWeight: 800 }}>CONTACT US</p>
            <hr className={styles.hrFooterLine} />
            <p>02 2732 1104</p>
          </div>
          <hr className={styles.hrFooterLine} />
          <p className={styles.copyRight}>
            © 2006 - 2023 Copyright Digital Technology Design
          </p>
        </footer>
      </div>
    </div>
  );
}
