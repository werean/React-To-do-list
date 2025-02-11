import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/App.css";
import App from "./components/Main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
