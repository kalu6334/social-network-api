import React, {useState} from 'react';
import {URL_TWEET} from '../config'

const Tweet = () => {
    const [tweet, settweet] = useState('')

        function handleLogin() {
        const loginInfo = {
            identifier: tweet
        }

        fetch(URL_TWEET, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(resdata => console.log(resdata));
    }
    return (
        <form>
        <input type="text" onChange={e => settweet(e.target.value) } value={tweet} /><br />
        <button type="button" onClick={() => handleLogin() }>cree</button>
        </form>
    );
};

export default Tweet;