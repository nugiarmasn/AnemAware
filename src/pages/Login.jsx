import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, clearError } from '../store/slices/authSlice';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Card from '../components/atoms/Card';
import Spinner from '../components/atoms/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

 // Di useEffect:
useEffect(() => {
  if (user) {
    navigate('/admin/dashboard');  // ← GANTI INI
  }
}, [user, navigate]);

// Di handleSubmit:
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(login({ email, password }));
  // Setelah login success, akan auto redirect karena useEffect
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent mb-2">AnemAware</h1>
          <p className="text-gray-400">Sistem Skrining Anemia - Admin Panel</p>
        </div>

        <Card>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          
          {error && (
            <div className="bg-danger/20 border border-danger text-danger px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@anemaware.com"
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? <Spinner size="sm" /> : 'Login'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;