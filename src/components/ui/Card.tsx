import React from "react";

import styles from "./Card.module.scss";

const Card: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
