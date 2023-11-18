import { Routes, Route } from "react-router-dom";
import { Create, Read, Update, Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
};
