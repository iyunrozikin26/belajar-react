import { Navigate } from "react-router-dom";

export default function IsLogin({ children }) {
    const access_token = localStorage.getItem("access_token");
    //  if (access_token) return <Navigate to="/movies" replace />;
    if (!access_token) return <Navigate to="/login" replace />;
   //  else {
   //      <Navigate to="/movies" replace />;
   //  }
    return children;
}
