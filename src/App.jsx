import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Task1 from "./pages/Task1/MainForm";
import Task2 from "./pages/Task2/MainForm";

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
      
    </Router>

  );
}

export default App;
