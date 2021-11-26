import React, { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import { authActions } from "../../store/auth-slice";
import styles from "./AuthForm.module.scss";
import Card from "../ui/Card";
import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";
import useAuth from "../../hooks/use-auth";

const AuthForm: React.FC = (props) => {
  //Inicialização de variáveis e states:
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { sendRequest, errorMessage, clearErrorMessage } = useAuth();
  const dispatch = useAppDispatch();
  const isCreatingAccount = useAppSelector(
    (state) => state.auth.isCreatingAccount
  );
  const isLoadingRequest = useAppSelector(
    (state) => state.auth.isLoadingRequest
  );

  //Form Functions Handler:
  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    await sendRequest(enteredEmail, enteredPassword);
  };

  const onFocusHandler = () => {
    clearErrorMessage();
  };

  const onClickCreateNewAccount = () => {
    clearErrorMessage();
    dispatch(authActions.enterCreateAccount());
  };

  const onClickExistingAccount = () => {
    clearErrorMessage();
    dispatch(authActions.leaveCreateAccount());
  };

  //Conditional Render Helpers:
  //Create New Account or Login Existing Account?
  const [btnOnClickFunction, btnText, formTitle] = isCreatingAccount
    ? [onClickExistingAccount, "Login with existing account", "Sign Up"]
    : [onClickCreateNewAccount, "Create new account", "Login"];

  //Submit Button or Loading Spinner?
  const buttonOrSpinner = isLoadingRequest ? (
    <LoadingSpinner />
  ) : (
    <Button className={styles.btnSubmit} type="submit">
      {formTitle}
    </Button>
  );

  return (
    <Card className={styles.authForm}>
      <h1>{formTitle}</h1>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          onFocus={onFocusHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          onFocus={onFocusHandler}
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
        {buttonOrSpinner}
      </form>
      <button className={styles.btnToggleForm} onClick={btnOnClickFunction}>
        {btnText}
      </button>
    </Card>
  );
};

export default AuthForm;
