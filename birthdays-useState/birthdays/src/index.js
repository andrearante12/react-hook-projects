import { createRoot } from "react-dom/client";
import People from "./components/People";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <main>
    <People />
  </main>
);
