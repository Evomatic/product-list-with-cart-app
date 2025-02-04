import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Theme from "./components/Theme";

import "./global.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
