import LogIn from "../../components/Auth/Login";
import "./userPortal.css"

function SignIn({ user }) {

    return (
        <div id="portal" className="text-center">
            <LogIn />
        </div>
    );
}

export default SignIn;
