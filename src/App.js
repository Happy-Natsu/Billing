import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Table2 from "./Pages/Table2";
import Table1 from "./Pages/Table1";
import Table3 from "./Pages/Table3";
import Table4 from "./Pages/Table4";
import Table5 from "./Pages/Table5";
import Table6 from "./Pages/Table6";
import Table7 from "./Pages/Table7";
import Table8 from "./Pages/Table8";
import Table9 from "./Pages/Table9";
import Table10 from "./Pages/Table10";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table1" element={<Table1 />} />
          <Route path="/table2" element={<Table2 />} />
          <Route path="/table3" element={<Table3 />} />
          <Route path="/table4" element={<Table4 />} />
          <Route path="/table5" element={<Table5 />} />
          <Route path="/table6" element={<Table6 />} />
          <Route path="/table7" element={<Table7 />} />
          <Route path="/table8" element={<Table8 />} />
          <Route path="/table9" element={<Table9 />} />
          <Route path="/table10" element={<Table10 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
