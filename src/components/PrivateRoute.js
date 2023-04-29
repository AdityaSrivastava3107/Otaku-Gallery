import { Navigate, Outlet } from 'react-router-dom';
// import postContext from '../context/posts/postContext';
// import { useContext } from 'react';
const PrivateRoute = () => {
  //const { token } = useContext(postContext);
    let auth = {'token' : true}
  return auth.token ? <Outlet/> : <Navigate to="/login"/>
};

export default PrivateRoute;