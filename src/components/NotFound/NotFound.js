import "../../stylesheet/NotFound.scss";

const Notfound = () => {
  return (
    <div className="notfound">
      <p>Are you a real fan? This character doesn't exist</p>
      <img
        className="notfound_img"
        src="https://media2.giphy.com/media/3ohzdD7vBsozD9ft6w/200.gif?cid=6104955e2b1b2c8e8e8ce7c6f895da43cba692bf5f4c3a1f&rid=200.gif&ct=s&cid=6104955e2b1b2c8e8e8ce7c6f895da43cba692bf5f4c3a1f&rid=200.gif&ct=s"
        alt="Character not found"
      />
    </div>
  );
};

export default Notfound;
