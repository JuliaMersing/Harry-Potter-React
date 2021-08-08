import React from "react";
import getApiData from "../services/Api";

const App = () => {
  getApiData();
  return (
    <div>
      <h1 className="title--big">Harry Potter Characters</h1>
    </div>
  );
};

export default App;
