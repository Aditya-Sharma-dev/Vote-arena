import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Playground from "./components/Playground";
import Discussions from "./components/Discussions";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Playground />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
