import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = () => {
        const data = {
            userName: userName,
            password: password
        }
    }
    let pathName = window.location.pathname;

    useEffect(() => {
        if (pathName === "/") {
            window.localStorage.clear()
        }
    }, [pathName])
    return (
        <div className="login-form">
            <h1>Login</h1>
            <div className="content">
                <div className="input-field">
                    <input type="userName" placeholder="UserName" onChange={onUserNameChange} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Password" onChange={onPasswordChange} />
                </div>
            </div>
            <div className="action">
                <button><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}> Register </Link></button>
                <button onClick={onSubmit()}>Sign in</button>
            </div>
        </div>
    )
}

export default Login;