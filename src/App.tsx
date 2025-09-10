import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// lazy import
const LazyLoadComp = lazy(() => import("./assets/pages/LazyLoadComp"));
import ProductDetail from "./assets/pages/ProductDetail";
import Student from "./assets/pages/Student";
import Login from "./assets/pages/Login";
import PrivateRouter from "./assets/pages/PrivateRouter";
import Account from "./assets/pages/Account";
import Team from "./assets/pages/Team";
import Teams from "./assets/pages/Teams";

function App() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private-route" element={<PrivateRouter />} />
        <Route path="/account" element={<Account />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:teamId" element={<Team />} />
        <Route path="/lorem" element={<LazyLoadComp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
