import LogIn from "components/Auth/Login"
import Register from 'components/Auth/Register';
import "pages/userPortal/userPortal.css"

function UserPortal({ user }) {

    return (
        <div id="portal" className="text-center">
            <LogIn />
        </div>
    );
}

export default UserPortal;
