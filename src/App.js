import "./App.css";
import Home from "./Home";
import TrailerLink from "./trailerLink";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailer/:movieId" element={<TrailerLink />} />
      </Routes>
    </div>
  );
}

export default App;
