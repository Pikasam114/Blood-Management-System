import SearchBlood from "./components/SearchBlood"
import UpdateInventory from "./components/UpdateInventory"
import DeleteInventoryRecord from "./components/DeleteInventoryRecord"
import CreateInventoryRecord from "./components/CreateInventoryRecord"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App p-4">
      <Router>
        <Routes>
          <Route path="/" element={<SearchBlood />} />
          <Route path="/update" element={<UpdateInventory />} />
          <Route path="/delete" element={<DeleteInventoryRecord />} />
          <Route path="/create" element={<CreateInventoryRecord />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
