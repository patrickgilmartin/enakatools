import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input';

const Register = () => {
    let history = useNavigate();
    const [user, setUser] = useState({ username: '', password: '', });

    const handleInputChange = (event, keyName) => {
        event.persist();
        setUser((user) => {
            return { ...user, [keyName]: event.target.value }
        })
    }

    const signUp = async () => {
        try {
            await Auth.signUp({
                username: user.username,
                password: user.password,
                attributes: {
                    email: user.username,
                }
            });
            history.push("/confirm-register");
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <form>
            <div className="container">
                <h3 className="text-lg">Register</h3>
                <div class="mb-3">
                    <Input
                        labelName='Username:'
                        id="username"
                        value={user.username}
                        handleInputChange={(e) => handleInputChange(e, 'username')}
                        inlineID="usernameDescript"
                        inlineDescription="Please provide a username for sign in."
                    />
                </div>
                <div class="mb-3">
                    <Input
                        labelName='Password:'
                        id="password"
                        type="password"
                        value={user.password}
                        handleInputChange={(e) => handleInputChange(e, 'password')}
                        inlineID="passwordDescript"
                        inlineDescription="Your password must be 8-20 characters long, contain letters and numbers."
                    />
                </div>
                <div className="">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => signUp()}>
                        Send
                    </button>
                </div>
                <div className="w-full">
                    <hr />
                    <p className="">Already have an account?</p>
                    <Link to={{ pathname: '/log-in' }} className="">
                        Log in
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Register;