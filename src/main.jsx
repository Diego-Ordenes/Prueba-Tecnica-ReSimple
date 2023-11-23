import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { CompaniesContextProvide } from "./Context/ContextCompanies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CompaniesContextProvide>
      <App />
    </CompaniesContextProvide>
  </React.StrictMode>
);
