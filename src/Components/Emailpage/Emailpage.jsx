import { useState } from "react";
import styles from "./Emailpage.module.css";
import DesktopImg from "../../assets/images/illustration-sign-up-desktop.svg";
import Thankspage from "../Thankspage/Thankspage";

export default function EmailPage() {
  const [userEmail, setUserEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isThanksPageOpen, setThanksPageOpen] = useState(false);

  const submitData = (e) => {
    e.preventDefault();

    if (dataValidate(userEmail)) {
      setIsValidEmail(true);
      setThanksPageOpen(true);
    } else {
      console.log("Invalid email. Please enter a valid email address.");
    }
  };

  const dataValidate = (email) => {
    // Regular expression for basic email validation
    const emailRegex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const thevalue = event.target.value;
    setUserEmail(thevalue);
  };

  const handleThankspage = () => {
    setThanksPageOpen(false);
    setUserEmail("");
  };

  return isThanksPageOpen ? (
    <Thankspage mailid={userEmail} toCloseThanksPage={handleThankspage} />
  ) : (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1>Stay updated!</h1>
          <p>Join 60,000 product managers receiving monthly updates on:</p>
          <div className={styles.thelist}>
            <img
              className={styles.tick}
              src="../src/assets/images/icon-list.svg"
              alt=""
            />
            <p>Products discovery and building what matters</p>
          </div>
          <div className={styles.thelist}>
            <img
              className={styles.tick}
              src="../src/assets/images/icon-list.svg"
              alt=""
            />
            <p>Products discovery and building what matters</p>
          </div>
          <div className={styles.thelist}>
            <img
              className={styles.tick}
              src="../src/assets/images/icon-list.svg"
              alt=""
            />
            <p>Products discovery and building what matters</p>
          </div>
          <form onSubmit={submitData} style={{ margin: "20px" }}>
            <label htmlFor="emailAddressText">Email address</label>
            <input
              value={userEmail}
              placeholder="  Enter your Email here"
              type="email"
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe to the Newsletter.
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={DesktopImg} alt="" />
        </div>
      </div>
    </div>
  );
}
