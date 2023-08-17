import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleCompleteAdd = (data) => {
        if (data.status) {
            console.log(data)
            localStorage.setItem("token", data.data)
            navigate("/home")
        }
        else {
            alert("something went wrong");
        }
    }

    const onSubmit = async () => {
        const data = {
            userName: userName,
            password: password
        }
        try {
            const response = await fetch("http://localhost:3000/api/v1/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            handleCompleteAdd(responseData)
        } catch (error) {
            console.log(error);
            alert(error);
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
                <button onClick={onSubmit}>Sign in</button>
            </div>
        </div>
    )
}

export default Login;