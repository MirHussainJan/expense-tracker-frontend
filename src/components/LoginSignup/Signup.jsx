import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import style from '../../pages/LoginSignup/LoginSignup.module.css'; // Importing the CSS module
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, fullName }),
      });

      const data = await res.json();
      if(res.status===409){
        toast.error(data.message);
        return;
      }
      if (res.ok) {
        // Handle successful response
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        navigate('/');
        toast.success('Signup successful!');
      } else {
        console.log(data.error)
        // Handle errors
        toast.error(data.message);
      }
    } catch (e) {
      console.error('An unexpected error occurred:', e);
      toast.error('An unexpected error occurred');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style['sign-up-form']}>
      <h2 className={style.title}>Sign Up</h2>
      <div className={style['input-field']}>
        <FaUser className={style.icon} />
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className={style['input-field']}>
        <FaUser className={style.icon} />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className={style['input-field']}>
        <FaEnvelope className={style.icon} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={style['input-field']}>
        <FaLock className={style.icon} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="submit" value="Sign Up" className={`${style.btn} ${style.solid}`} />
    </form>
  );
}
