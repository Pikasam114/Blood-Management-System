import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SearchBlood from "./components/SearchBlood";
import UpdateInventory from "./components/UpdateInventory";
import DeleteBank from "./components/DeleteBank";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CreateBank from "./components/CreateBank";

function App() {
  return (
    <div className="App p-4">
      <Router>
        <Routes>
          <Route path="/" element={<SearchBlood />} />
          <Route path="/update" element={<UpdateInventory />} />
          <Route path="/delete" element={<DeleteBank />} />
          <Route path="/create" element={<CreateBank/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
