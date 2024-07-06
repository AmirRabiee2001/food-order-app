import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import Nemad from "../../img/senf.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h1>سفارش آنلاین غذا</h1>
        <div className="footer__link-container">
          <ul>
            <li className="footer__link-logo">
              <FaInstagram />
            </li>
            <li className="footer__link-logo">
              <FaTwitter />
            </li>
            <li className="footer__link-logo">
              <FaTelegram />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__links">
        <ul>
          <li>درباره ما</li>
          <li>پرسش های متداول</li>
          <li>قوانین سایت</li>
          <li>حریم خصوصی</li>
          <li>ثبت شکایات</li>
        </ul>
      </div>
      <img src={Nemad} alt="" />
    </footer>
  );
};
export default Footer;
