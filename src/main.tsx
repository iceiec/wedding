import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";  // <-- correct path
import "./styles/index.css";       // your Tailwind styles

createRoot(document.getElementById("root")!).render(<App />);
