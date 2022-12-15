import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      {/* 🟡Change componets to rafce, and resolve errors🟡 */}
    </div>
  );
}

export default App;
