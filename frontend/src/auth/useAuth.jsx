import Cookies from "js-cookie";

const isAuthenticated = () => {
  const authCookie = Cookies.get("Authorization");
  if (authCookie !== undefined && authCookie !== null) {
    console.log("Authorization cookie found:", authCookie);
    const tokenPrefix = "Bearer ";
    if (authCookie.startsWith(tokenPrefix)) {
      const jwtToken = authCookie.substring(tokenPrefix.length);
      console.log(jwtToken);
      return { jwtToken: jwtToken, authStatus: true };
    }
  }
  console.log("Authorization cookie not found or invalid.");
  return { jwtToken: null, authStatus: false };
};
export default isAuthenticated;
