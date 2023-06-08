import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateOrder from "./Pages/CreateOrder";
import Inventory from "./Pages/Inventory";
import Offers from "./Pages/Offers";
import Orders from "./Pages/Orders";
import Premium from "./Pages/Premium";
import Support from "./Pages/Support";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/create" element={<CreateOrder />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
