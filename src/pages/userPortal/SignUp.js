import Register from '../../components/Auth/Register';
import "./userPortal.css"

function SignUp({ user }) {

    return (
        <div id="portal" className="text-center">
            <Register />
        </div>
    );
}

export default SignUp;