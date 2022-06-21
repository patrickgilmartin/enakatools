import { Auth } from 'aws-amplify';

async function getUser() {
    try {
        let user = await Auth.currentAuthenticatedUser();
        return user;
    } catch (error) {
        console.log(error)
    }
}

export default getUser;