import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, to,  children }) => {
  console.log(user, 'ini user dari protected');
  console.log(children, 'ini children dari protected');
  if (!user && to === 'admin') { // ada tambahan pembanding untuk lebih jelas, jika tidaka da akan ambigu
    return <Navigate to="/login" replace />;
  }
  // if (user) { >> jika ada user/sudah login dan dia mau ke login, akan bisa ke login (ambigu), makanya buat pembanding lebih jelas
  //   return <Navigate to="/admin-page" replace />;
  // }
  
  if (user && to === 'login') {
    return <Navigate to="/admin-page" replace />;
  }

  if (!user && to === 'add') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute