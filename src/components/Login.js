import React, {useState} from 'react';
import {URL_LOGIN} from '../config'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

        function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        fetch(URL_LOGIN, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(resdata => console.log(resdata));


        // setCookie(null, 'jwt', loginResponse.jwt , {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: '/',
        // })

        // Router.push('/payed-articles')
    }
    
    return (
        <form>
        <input type="email" onChange={e => setUsername(e.target.value) } value={username} /><br />
        <input type="password" onChange={e => setPassword(e.target.value) } value={password} /><br />
        <button type="button" onClick={() => handleLogin() }>Login</button>
    </form>
    );
};

export default Login;