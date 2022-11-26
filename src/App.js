import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import About from "./components/About";
import Signup from "./components/Signup";

function App() {
  const add = () => {
    console.log("add");
  };
  return (
    <div className="App">
      <Router>
        <Header title={add} />
        <Routes>
          <Route path="/" element={<h3>Home</h3>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
