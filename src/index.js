import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StatRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StatRating maxRating={5} />
    <StatRating size={24} color="red" className="test" />
  </React.StrictMode>
);
