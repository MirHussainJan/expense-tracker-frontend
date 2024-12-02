import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import style from '../../pages/LoginSignup/LoginSignup.module.css'; // Importing the CSS module
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${`http://localhost:3000/api/users`}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.status !== 200) {
        if (data.message === 'Invalid credentials') {
          toast.error('Invalid email or password. Please try again.');
        }
       
        return;
      }
      if (data.error) {
        toast.error(data.error);
        return;
      }
      if (data.token) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        toast.success('Login successful!');
        navigate('/');
      }
    } catch (error) {
     
      toast.error('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style['sign-in-form']}>
      <h2 className={style.title}>Sign In</h2>
      <div className={style['input-field']}>
        <FaUser className={style.icon} />
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
      <input type="submit" value={'Login'} className={`${style.btn} ${style.solid}`} />
      <p className={style['social-text']}>Or Sign in with social platforms</p>
      <div className={style['social-media']}>
        <div className={style['social-icon']}>
          <FcGoogle className={style.googleIcon} /> Sign in with Google
        </div>
      </div>
    </form>
  );
}
