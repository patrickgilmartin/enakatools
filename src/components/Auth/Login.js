import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Input from '../common/Input';

const LogIn = () => {
    let history = useNavigate();
    const [user, setUser] = useState({ username: '', password: '' });

    const handleInputChange = (event, keyName) => {
        event.persist();
        setUser((user) => {
            return { ...user, [keyName]: event.target.value }
        })
    }

    const logIn = async () => {
        try {
            await Auth.signIn({
                username: user.username,
                password: user.password,
            });
            history.push('./home')
        } catch (error) {
            console.error('error', error);
        }
    }
    return (
        <div className="form-signin w-100 m-auto">
            <h1>Log in to your account</h1>
            <form>
                <div className='d-flex flex-column align-items-center'>
                    <Input
                        labelName='Username:'
                        id='username'
                        value={user.username}
                        handleInputChange={(e) => handleInputChange(e, 'username')}
                        inlineID='usernameDescript'
                        inlineDescription="Provide the username you entered when registered."
                    />
                    <Input
                        labelName='Password:'
                        id='password'
                        type="password"
                        value={user.password}
                        handleInputChange={(e) => handleInputChange(e, 'password')}
                        inlineID='passwordDescript'
                        inlineDescription='Use your password associated with your username.'
                    />
                </div>
                <div class="submit py-2">
                    <input class="btn btn-primary w-50" id="submitButton" type="submit" value="Sign In" />
                </div>
                <div className="">
                    <hr />
                    <p className="">Don't have an account?</p>
                    <Link to={{ pathname: '/register' }}
                        className="">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LogIn;

{/* <div className="">
    <h3 className="">Log In</h3>
    <Input
        labelName='Username:'
        id='username'
        value={user.username}
        handleInputChange={(e) => handleInputChange(e, 'username')}
        inlineID='usernameDescript'
        inlineDescription="Provide the username you entered when registered."
    />
    <Input
        labelName='Password:'
        id='password'
        type="password"
        value={user.password}
        handleInputChange={(e) => handleInputChange(e, 'password')}
        inlineID='passwordDescript'
        inlineDescription='Use your password associated with your username.'
    />
    <div className="">
        <button onClick={() => logIn()} className="">
            Log in
        </button>
    </div>
    <div className="">
        <hr />
        <p className="">Don't have an account?</p>
        <Link to={{ pathname: '/register' }}
            className="">
            Register
        </Link>
    </div>
</div> */}