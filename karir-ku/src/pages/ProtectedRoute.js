import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  console.log(user, 'ini user dari protected');
  console.log(children, 'ini children dari protected');
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute