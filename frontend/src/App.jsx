import Signup from "./components/signup";
import Login from "./components/Login";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";
import CreatePosts from "./components/createPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./app/store";
import AuthProvider from "./context/AuthProvider";
import Chatbox from "./components/chatbox";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // return (
  //   <BrowserRouter>
  //     <AuthProvider>
  //       <Routes>
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/signup" element={<Signup />} />
  //         <Route path="/signin" element={<Login />} />
  //         <Route path="/dashboard" element={<Dashboard />} />
  //         <Route path="/posts" element={<CreatePosts />} />
  //         <Route path="/chat" element={<Chatbox />} />
  //       </Routes>
  //     </AuthProvider>
  //   </BrowserRouter>
  // );
  const countAge = useSelector((state) => state.age);
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <div className="homepage">{countAge}</div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </>
  );
}

export default App;
