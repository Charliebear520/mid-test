import { theme, Input, Checkbox } from "antd";
import styles from "./footer.module.css";

export default function Footer() {
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
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.content}>
            <p style={{ fontWeight: 400 }}>
              Subscribe to Head & Shoulder communications
            </p>
            <hr className={styles.hrFooterLine} />
            <Input placeholder="Email address" />
            <Checkbox onChange={onChange}>
              Subscribe to receive communications from Head & Shoulder about our
              products and services. By subscribing, you confirm you have read
              and accept our privacy policy .
            </Checkbox>
          </div>
          <div className={styles.followUs}>
            <p style={{ fontWeight: 400 }}>Orders and support</p>
            <hr className={styles.hrFooterLine} />
            <div className={styles.iconsArea}>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
            </div>
          </div>
          <div className={styles.contactUs}>
            <p style={{ fontWeight: 400 }}>Services</p>
            <hr className={styles.hrFooterLine} />
            <p style={{ fontWeight: 400 }}>Orders and support</p>
            <p style={{ fontWeight: 400 }}>Orders and support</p>
            <p style={{ fontWeight: 400 }}>Orders and support</p>
            <p style={{ fontWeight: 400 }}>Orders and support</p>
          </div>
          <div className={styles.Location}>
            <p style={{ fontWeight: 400 }}>Location preferences</p>
            <hr className={styles.hrFooterLine} />
            <p style={{ fontWeight: 400 }}>Shipping: United States</p>
            <p style={{ fontWeight: 400 }}>Language: English</p>
          </div>

          <div className={styles.content2}>
            <p style={{ fontWeight: 400 }}>Sustainability</p>
            <hr className={styles.hrFooterLine} />
            <p style={{ textIndent: "1rem" }}>
              All Head & Shoulder products are vegan, and we do not test our
              formulations or ingredients on animals. We are Leaping Bunny
              approved and a Certified B Corporation. Learn more
            </p>
          </div>
          <div className={styles.followUs2}>
            <p style={{ fontWeight: 400 }}>About</p>
            <hr className={styles.hrFooterLine} />
            <div className={styles.iconsArea}>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
              <a href="#">
                <p style={{ fontWeight: 400 }}>Orders and support</p>
              </a>
            </div>
          </div>
          <div className={styles.contactUs2}>
            <p style={{ fontWeight: 400 }}>Social Media</p>
            <hr className={styles.hrFooterLine} />
            <a href="#">
              <p style={{ fontWeight: 400 }}>Instagram</p>
            </a>
            <a href="#">
              <p style={{ fontWeight: 400 }}>Twitter</p>
            </a>
            <a href="#">
              <p style={{ fontWeight: 400 }}>Linkedin</p>
            </a>
          </div>
          <hr className={styles.hrFooterLine} />
          <p className={styles.copyRight}>
            © HEAD &SHOULDER 2022 Procter & Gamble
          </p>
        </footer>
      </div>
    </div>
  );
}
