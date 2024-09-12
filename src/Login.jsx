import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, checkAuth } from './store/authSlice';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const handleLogin = () => {
        dispatch(login({ username, password }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isAuthenticated ? (
                <div>
                    <h2 className="text-2xl mb-4">Welcome!</h2>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl mb-4">Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border mb-2 p-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border mb-4 p-2"
                    />
                    <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;