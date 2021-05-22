import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
    
        Meteor.loginWithPassword(username, password);
    };

    return (
        <form onSubmit={submit} className="login-form">
            <div>
                <label htmlFor="username">Username</label>

            </div>

            <div>

                <input
                type="text"
                placeholder="Ahsan"
                name="username"
                required
                onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="Ahsan">Password</label>

            </div>

            <div>
                <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={e => setPassword(e.target.value)}
                />

            </div>

            <div>
                <button type="submit">Log In</button>

            </div>
  
      </form>
    );
};

export default LoginForm;