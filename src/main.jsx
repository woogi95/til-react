import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IndexPage from "./pages/IndexPage";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexPage></IndexPage>
  </StrictMode>,
);
