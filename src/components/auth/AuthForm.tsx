import React, { useRef } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import { authActions } from "../../store/auth-slice";
import styles from "./AuthForm.module.scss";
import Card from "../ui/Card";
import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

const AuthForm: React.FC = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreatingAccount = useAppSelector(
    (state) => state.auth.isCreatingAccount
  );
  const isLoadingRequest = useAppSelector(
    (state) => state.auth.isLoadingRequest
  );
  const errorMessage = useAppSelector((state) => state.auth.errorMessage);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const createNewAccountHandler = () => {
    dispatch(authActions.enterCreateAccount());
  };
  const loginExistingAccountHandler = () => {
    dispatch(authActions.leaveCreateAccount());
  };

  //Submit Handler:

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    let url = "";

    //Checando se Login ou Signup
    if (isCreatingAccount) {
      //creating fetch url
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACH4THeD-9Tjbm8416dp0efZwVxasPZME";
    } else {
      //logging in fetch url
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACH4THeD-9Tjbm8416dp0efZwVxasPZME";
    }

    const sendRequest = async () => {
      dispatch(authActions.startLoadingRequest());
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        dispatch(authActions.setErrorMessage(data.error.message));
        throw new Error("Something went wrong");
      }

      dispatch(authActions.stopLoadingRequest());
      return data;
    };

    try {
      const serverResponse = await sendRequest();
      const userToken = serverResponse.idToken;
      dispatch(authActions.login(userToken));
      dispatch(authActions.setErrorMessage(null));
      navigate("/profile", { replace: true });
    } catch (error) {
      dispatch(authActions.stopLoadingRequest());
      console.log(error);
    }
  };

  return (
    <Card className={styles.authForm}>
      <h2>{isCreatingAccount ? "Sign Up" : "Login"}</h2>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" ref={emailInputRef} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordInputRef} />
        {errorMessage && !isLoadingRequest && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
        {!isLoadingRequest ? (
          <Button className={styles.btnSubmit} type="submit">
            {isCreatingAccount ? "Sign Up" : "Login"}
          </Button>
        ) : (
          <LoadingSpinner />
        )}
      </form>
      {!isCreatingAccount ? (
        <button className={styles.btn} onClick={createNewAccountHandler}>
          Create new account
        </button>
      ) : (
        <button className={styles.btn} onClick={loginExistingAccountHandler}>
          Login with existing account
        </button>
      )}
    </Card>
  );
};

export default AuthForm;
