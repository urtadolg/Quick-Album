import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hook";
import { authActions } from "../store/auth-slice";

const useAuth = () => {
  //Inicialização de variáveis e states:
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isCreatingAccount = useAppSelector(
    (state) => state.auth.isCreatingAccount
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Funcões:
  const sendRequest = async (enteredEmail: string, enteredPassword: string) => {
    let url = "";

    //Checando se Login ou Signup:
    if (isCreatingAccount) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API}`;
    }

    const sendData = async () => {
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
        setErrorMessage(data.error.message);
        throw new Error("Something went wrong");
      }

      return data;
    };

    try {
      dispatch(authActions.startLoadingRequest());
      const serverResponse = await sendData();
      const userToken = serverResponse.idToken;
      dispatch(authActions.stopLoadingRequest());
      dispatch(authActions.login(userToken));
      navigate("/profile", { replace: true });
    } catch (error) {
      dispatch(authActions.stopLoadingRequest());
      console.log("Houve um erro ao tentar acessar o servidor: " + error);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage(null);
  };

  return {
    sendRequest,
    errorMessage,
    clearErrorMessage,
  };
};

export default useAuth;
