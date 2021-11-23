import React from "react";
import { Routes, Route, Navigate } from "react-router";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<h1>hello world</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
