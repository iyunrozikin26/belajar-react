import { Navigate } from "react-router-dom";

export default function IsLogin({ children }) {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) return <Navigate to="/login" replace />;
    else {
        return children 
    }
    // || <Navigate to="/movies" replace />;
}
