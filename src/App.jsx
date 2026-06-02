import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Dashboard from "./pages/Dashboard";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    let duration = 2000;

    if (connection) {
      switch (connection.effectiveType) {
        case "slow-2g":
          duration = 6000;
          break;
        case "2g":
          duration = 5000;
          break;
        case "3g":
          duration = 3500;
          break;
        case "4g":
          duration = 1500;
          break;
        default:
          duration = 2000;
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Dashboard />;
}