import { Routes, Route } from "react-router-dom";

import Strategy from "@views/strategy";
import Backtest from "@views/backtest";
import Dashboard from "@views/dashboard";

export default function Router() {
  const routes = [
    { path: "/", exact: true, view: <Dashboard /> },
    { path: "/strategy", view: <Strategy /> },
    { path: "/backtest", view: <Backtest /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.view} />
      ))}
    </Routes>
  );
}
