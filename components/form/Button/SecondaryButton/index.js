import React from "react";
import style from "./SecondaryBotton.module.css";
const SecondaryButton = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={(e) => typeof onClick == "function" && onClick(e)}
        className={style["btn"]}
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
