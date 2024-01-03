import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import CreatePosts from "./components/createPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/authProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<CreatePosts />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
