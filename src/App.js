import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Register from "./screens/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
