import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./components/Home";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
