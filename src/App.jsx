import { useNavigate, Route, Routes } from "react-router-dom";
import Register from "./assets/Register";
import Home from "./assets/Home";
import Login from "./assets/Login";
import Profile from "./assets/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
export default App;