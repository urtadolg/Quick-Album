import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBars,
  faHome,
  faUser,
  faThLarge,
  faSignOutAlt,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

import usePexels from "./hooks/use-pexels";
import { useAppSelector } from "./store/hook";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

//configurando FontAwesome:
library.add(
  faSearch,
  faBars,
  faHome,
  faUser,
  faThLarge,
  faSignOutAlt,
  faExpand
);

function App() {
  //Inicialização de variáveis e states:
  const { sendCuratedRequest, errorMessage } = usePexels();
  const selectedPage = useAppSelector((state) => state.pagination.selectedPage);

  useEffect(() => {
    /* sendCuratedRequest(selectedPage, 40); */
    console.log(errorMessage);
  }, [selectedPage, errorMessage, sendCuratedRequest]);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/auth"
          element={isLoggedIn ? <Navigate to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
