import { useState } from 'react';
import api from "../api";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";
import {useNavigate} from "react-router-dom";
import '../styles/Form.css';

function Form({route, method}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
        }
    };

    const name = method === 'login' ? 'Login' : 'Register';
    return (
    <form onSubmit={handleSubmit} className='form-container'>
        <h2> {name} </h2>
        <div className='form-group'>
            <label>Username:</label>
            <input
                type="text"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Username'
            />
        </div>
        <div className='form-group'>
            <label>Password:</label>
            <input
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='password'
            />
        </div>
        <button type="submit">{name}</button>

    </form>
    );
}

export default Form;