import React, { useContext, useEffect } from "react";
import Navbar from "./navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../features/userSlice";
import Timer from "./timer";
import { AuthContext } from "../context/AuthContext";

export default function Homepage() {
  // react-redux
  // const details = useSelector((state) => state.users);
  // const [{ authStatus = false, loading = true, user = [] }] = details;
  // const response = useDispatch(getUser);

  // context-provider
  // const { Data, AuthStatus } = useContext(AuthContext);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/user/", {
  //       withCredentials: true,
  //     });
  //     if (response) {
  //       setData([response.data.authorizedData]);
  //       setAuthStatus(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <Navbar />
      <div className="homepageContainer">
        {Data === undefined || Data.length === 0 ? (
          <h1>Welcome</h1>
        ) : (
          <h1>Welcome {Data[0].name}</h1>
        )} */}
        {/* <Timer />
      </div> */}
    </>
  );
}
