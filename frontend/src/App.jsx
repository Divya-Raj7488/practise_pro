import Signup from "./components/signup";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";
import CreatePosts from "./components/createPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbox from "./components/chatbox";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<CreatePosts />} />
          <Route path="/chat" element={<Chatbox />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
