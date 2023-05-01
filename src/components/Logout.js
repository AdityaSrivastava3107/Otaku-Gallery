// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import AuthContext from '../context/authContext';
// import { useContext } from 'react';
// function Logout() {
//   const { setIsLoggedIn} = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/authorize/logout', {
//         headers: {
//           'auth-token':  `${localStorage.getItem('auth-token')}`
//         }
//       });
//       setIsLoggedIn(false)
//       // remove the auth token from local storage
//       localStorage.removeItem('auth-token');
//       navigate('/home');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   handleLogout(); 
// }

// export default Logout;