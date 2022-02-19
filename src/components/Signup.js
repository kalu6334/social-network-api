import React, {useState} from 'react';
import {URL_REGISTRER } from '../config'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        fetch(URL_REGISTRER, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
        .then(res => res.json())
        .then(respons => console.log(respons));

    }

    return (
    <form >
        <input type="text" onChange={e => setUsername(e.target.value) } value={username} placeholder="Username"/><br />
        <input type="email" onChange={e => setEmail(e.target.value) } value={email} placeholder="Email" /><br />
        <input type="password" onChange={e => setPassword(e.target.value) } value={password} placeholder="Password"/><br />
        <button type="button" onClick={() => handleRegister() }>Register</button>
    </form>
       
    );
};

export default Signup;