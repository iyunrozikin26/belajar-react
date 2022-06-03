import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, to,  children }) => {
  console.log(user, 'ini user dari protected');
  console.log(children, 'ini children dari protected');
  if (!user && to === 'home') { 
    return <Navigate to="/login" replace />;
  }

  if (user && to === 'login') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute