import { useState } from "react";
import { Home } from "./pages/home/home";
import { Plans } from "./pages/plans/Plans";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ProtegerRutas } from "./shared/proteger-rutas/ProtegerRutas";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtegerRutas>
                <Home />
              </ProtegerRutas>
            }
          />

          <Route
            exact
            path="/plans"
            element={
              <ProtegerRutas>
                <Plans />
              </ProtegerRutas>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
