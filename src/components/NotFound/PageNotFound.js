import { Link } from "react-router-dom";
import "../../stylesheet/NotFound.scss";

function PageNotFound() {
  return (
    <div className="notfound">
      <p>Oh boy! You must be wrong, this page does not exist!</p>
      <img
        className="notfound_img"
        src="https://media3.giphy.com/media/AqOioh3rTS0Z3pP6V2/200.gif?cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g&cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g"
        alt="This page doesn't exist"
      />
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
}

export default PageNotFound;
