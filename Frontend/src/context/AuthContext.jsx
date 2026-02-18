// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { autoLoginAPI } from '../apiCall/auth.api.js';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // ✅ Called ONCE when app loads
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const data = await autoLoginAPI();  // Cookie sent automatically
            setUser(data);
            setIsLoggedIn(true);
        } catch (error) {
            setUser(null);
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
    };

    // Call this after login
    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    // Call this after logout
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };