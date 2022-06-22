import { useState} from 'react';
import {useUser} from "../context/UserContext";

function Profile() {

    const {user, setUser} = useUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () =>{
        setLoading(true);
        setTimeout(() =>{
            setUser({id: 1, userName: 'Veli'});
            setLoading(false);
        },1500)
    };

    const handleLogout = () =>{
        setTimeout(() =>{
        setUser(null);
    },1500);
    };

  return (
    <div>
        {!user && <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>}        
        <br></br>
        <br></br>
      <code>{JSON.stringify(user)}</code>
      <br></br>
      <br></br>

      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default Profile
