import { createRoot } from "react-dom/client";

import Navbar from "./components/Navbar";
import "./small_screen.css";
import "./large_screen.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div id="nav-parent">
    <Navbar />
  </div>
);
