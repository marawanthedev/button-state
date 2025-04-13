import React, { useEffect } from "react";
import ReactButtons from "./ReactButtons";
import VanillaButtons from "./VanillaButtons";
import "./App.css"

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🧠 React State vs Vanilla JS</h1>

      <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={{ width: "35%" }}>
          <h2>✅ React Way</h2>
          <ReactButtons />
        </div>

        <div style={{ width: "35%" }}>
          <h2>❌ Vanilla JS Way</h2>
          <VanillaButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
