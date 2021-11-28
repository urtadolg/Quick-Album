import { Routes, Route, Navigate } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useAppSelector } from "./store/hook";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

library.add(faSearch);

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
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
