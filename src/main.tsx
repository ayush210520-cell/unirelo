import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import MovingToIndiaPage from "./MovingToIndiaPage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moving-to-india" element={<MovingToIndiaPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
