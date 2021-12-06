import React from "react";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import { paginationActions } from "../../store/pagination-slice";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const dispatch = useAppDispatch();
  let displayArray: (string | number)[] = [];
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);

  //Funções:

  function isButton(
    target: HTMLButtonElement | EventTarget
  ): target is HTMLButtonElement {
    return (target as HTMLButtonElement).innerText !== undefined;
  }

  const makeDisplayArray = (totalPages: number): (string | number)[] => {
    if (totalPages > 10) {
      if (currentPage < 7) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      } else if (currentPage >= 7) {
        if (currentPage >= totalPages - 4) {
          return [
            totalPages - 9,
            totalPages - 8,
            totalPages - 7,
            totalPages - 6,
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        }
        if (currentPage < totalPages - 4) {
          return [
            currentPage - 5,
            currentPage - 4,
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            "...",
            totalPages,
          ];
        }
      }
    }
    const displayArray = [];
    for (let i = 0; i < totalPages; i++) {
      displayArray[i] = i + 1;
    }
    return displayArray;
  };

  displayArray = makeDisplayArray(totalPages);

  const onClickHandler = (event: React.MouseEvent) => {
    if (isButton(event.target)) {
      console.log(event);
      if (event.target.innerText !== "< Anterior" && "Próxima >") {
        dispatch(
          paginationActions.selectPage(parseInt(event.target.innerText))
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (event.target.innerText === "Próxima >") {
        dispatch(paginationActions.selectPage(currentPage + 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (event.target.innerText === "< Anterior") {
        dispatch(paginationActions.selectPage(currentPage - 1));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const pagesDisplay = displayArray.map((item) => {
    let isBtnDisabled = false;
    if (item === "...") {
      isBtnDisabled = true;
    }
    return (
      <li key={item}>
        <button
          onClick={onClickHandler}
          disabled={isBtnDisabled}
          className={currentPage === item ? styles.active : undefined}
        >
          {item}
        </button>
      </li>
    );
  });

  const PaginationContainer = () => {
    return (
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={onClickHandler}>{"< Anterior"}</button>
          </li>
        )}
        {pagesDisplay}
        {currentPage < totalPages && (
          <li>
            <button onClick={onClickHandler}>{`Próxima >`}</button>
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className={styles.paginationContainer}>
      <PaginationContainer />
      {props.children}
      <PaginationContainer />
    </div>
  );
};

export default Pagination;
