import { Link } from "react-router-dom";
import "../../stylesheet/NotFound.scss";

function PageNotFound() {
  return (
    <div className="notfound">
      <p>Keep studying your spells, this page does not exist!</p>
      <img
        className="notfound_img"
        src="https://media0.giphy.com/media/BJmTtZL4hova8/200.gif?cid=6104955eff4406c0ad0178ba7fb6ff5896e440578c81972d&rid=200.gif&ct=g&cid=6104955eff4406c0ad0178ba7fb6ff5896e440578c81972d&rid=200.gif&ct=g"
        alt="This page doesn't exist"
      />
      <Link to="/">
        <span className="home_icon">👈🏻</span>
      </Link>
    </div>
  );
}

export default PageNotFound;
