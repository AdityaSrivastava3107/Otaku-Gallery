import { Navigate, Outlet } from 'react-router-dom';
//import postContext from '../context/posts/postContext';
import { useContext } from 'react';
import AuthContext from '../context/authContext';
const PrivateRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;