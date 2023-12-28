import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AuthProvider from "./auth/authProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          // element={
          //   (<AuthProvider>
          //     <Dashboard />
          //   </AuthProvider>)
          // }
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
