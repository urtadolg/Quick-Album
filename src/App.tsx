import React from "react";
import { Routes, Route, Navigate } from "react-router";

import { useAppSelector } from "./store/hook";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<h1>hello world</h1>} />
        <Route path="/auth" element={isLoggedIn ? <Profile /> : <Auth />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
