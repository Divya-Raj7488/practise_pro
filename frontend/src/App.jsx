import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/authProvider";
import Posts from "./components/posts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
