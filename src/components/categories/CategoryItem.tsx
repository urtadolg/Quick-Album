import React from "react";

import styles from "./CategoryItem.module.scss";

const CategoryItem: React.FC<{
  onClick: (event: React.MouseEvent) => void;
  name: string;
  className?: string;
}> = (props) => {
  return (
    <li
      id={props.name}
      onClick={props.onClick}
      className={`${styles.itemContainer} ${props.className}`}
    >
      <div className={styles.item}>
        {props.children}
        {props.name}
      </div>
    </li>
  );
};

export default CategoryItem;
