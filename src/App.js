import "./App.css";
import LineChartComponent from "./LineChartComponent";
import NavBar from "./NavBar/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<LineChartComponent />} />
          <Route path="/area-chart" exact element={<AreaChartComponent />} />
          <Route path="/bar-chart" exact element={<BarChartComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
