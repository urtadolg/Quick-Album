import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import { paginationActions } from "../../store/pagination-slice";
import styles from "./Pagination.module.scss";

const Pagination: React.FC<{}> = (props) => {
  //Inicialização de variáveis e states:
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  let displayArray: (string | number)[] = [];
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const totalPages = useAppSelector((state) => state.pagination.totalPages);

  //Funções:
  window.addEventListener("load", () => {
    setIsMobileScreen(window.outerWidth < 769);
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileScreen(window.outerWidth < 769);
    });
  }, [isMobileScreen]);

  function isButton(
    target: HTMLButtonElement | EventTarget
  ): target is HTMLButtonElement {
    return (target as HTMLButtonElement).innerText !== undefined;
  }

  const makeDisplayArray = (
    totalPages: number,
    totalDisplayPages: number
  ): (string | number)[] => {
    const displayArray = [];
    if (totalPages > totalDisplayPages) {
      if (currentPage < totalDisplayPages - 1) {
        for (let i = 0; i < totalDisplayPages; i++) {
          displayArray[i] = i + 1;
        }
        return displayArray;
      } else if (currentPage >= totalDisplayPages - 2) {
        if (currentPage >= totalPages - 4) {
          for (let i = 0; i < totalDisplayPages; i++) {
            displayArray[i] = totalPages - (totalDisplayPages - 1 - i);
          }
          return displayArray;
        }
        if (currentPage < totalPages - 4) {
          for (let i = 0; i < totalDisplayPages / 3; i++) {
            displayArray[i] =
              currentPage - (Math.ceil(totalDisplayPages / 3) - i);
          }
          displayArray.push(currentPage);
          displayArray.push(currentPage + 1);
          displayArray.push(currentPage + 2);
          displayArray.push("...");
          displayArray.push(totalPages);
          return displayArray;
        }
      }
    }
    for (let i = 0; i < totalPages; i++) {
      displayArray[i] = i + 1;
    }
    return displayArray;
  };

  isMobileScreen
    ? (displayArray = makeDisplayArray(totalPages, 5))
    : (displayArray = makeDisplayArray(totalPages, 10));

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
            <button onClick={onClickHandler}>
              {isMobileScreen ? "<" : "< Anterior"}
            </button>
          </li>
        )}
        {pagesDisplay}
        {currentPage < totalPages && (
          <li>
            <button onClick={onClickHandler}>
              {isMobileScreen ? ">" : `Próxima >`}
            </button>
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
