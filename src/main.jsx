import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ Enables SEO optimization */}
      <BrowserRouter> {/* ✅ Only ONE Router should be here */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
