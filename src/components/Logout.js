import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/authorize/logout', null, {
        headers: {
          'auth-token': `Bearer ${localStorage.getItem('auth-token')}`
        }
      });

      // remove the auth token from local storage
      localStorage.removeItem('auth-token');
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  handleLogout(); 
}

export default Logout;