import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import usePexels from "./hooks/use-pexels";
import { useAppSelector } from "./store/hook";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

//configurando FontAwesome:
library.add(faSearch);

function App() {
  //Inicialização de variáveis e states:
  const { sendCuratedRequest, errorMessage } = usePexels();
  const selectedPage = useAppSelector((state) => state.pagination.selectedPage);

  useEffect(() => {
    sendCuratedRequest(selectedPage, 40);
    console.log("feching...");
  }, [selectedPage]);
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
