import { createRoot } from "react-dom/client";

import "./index.css";
import Member from "./member/Member";

createRoot(document.getElementById("root")).render(
  <>
    <Member />
  </>,
);
