import { createRoot } from "react-dom/client";
import App from './app/components/App'
import "./styles/index.css";       // your Tailwind styles


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)