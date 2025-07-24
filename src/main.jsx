import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./styles/reset.css";
import "./styles/variables.css";
import "./index.css";
import App from "./components/app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
