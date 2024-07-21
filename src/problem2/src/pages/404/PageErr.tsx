import { Link } from "react-router-dom";
import errorIcon from "../../assets/images/404.svg";
import "./pageErr.css";

function PageErr() {
  return (
    <div className="err-page">
      <div className="err-image">
        <img src={errorIcon} alt="err-page" />
      </div>
      <h2>404</h2>
      <p>
        Page not found, <Link to="/">return to homepage</Link>
      </p>
    </div>
  );
}

export default PageErr;
