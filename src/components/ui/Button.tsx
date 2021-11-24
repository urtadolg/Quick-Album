import React from "react";

import styles from "./Button.module.scss";

const Button: React.FC<{
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}> = (props) => {
  return (
    <button
      type={props.type ? props.type : undefined}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
