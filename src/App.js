import { useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import PrivateRoute from './components/routes/PrivateRoute';
import ProtectedRoute from './components/routes/ProtectedRoute'; //Authenticated routes
// import PublicRoute from './components/routes/PublicRoutes';

import getUser from "./utils/auth";

const Home = lazy(() => import("./pages/home/Home"));
const Market = lazy(() => import("./pages/market/Market"));
const BootstrapTest = lazy(() => import("./pages/BootstrapTest"));
const AppTest = lazy(() => import("./pages/app/App"));
const SignIn = lazy(() => import("./pages/userPortal/SignIn"));
const SignUp = lazy(() => import("./pages/userPortal/SignUp"));

const App = () => {
    const [user, setUser] = useState();

    const handleLogin = () =>
        setUser(getUser());

    const handleLogout = () => setUser(null);

    return (
        <Routes>
            <Route index element={<Home user={user} />} />
            <Route path="/market" element={<Market user={user} />} />
            <Route path="/app" element={<AppTest user={user} />} />
            <Route path="/signin" element={<SignIn user={user} />} />
            <Route path="/register" element={<SignUp user={user}/>} />
            <Route element={<ProtectedRoute redirectPath="/" isAllowed={!!user} />}>
                <Route path="/bootstrap" element={<BootstrapTest user={user} />} />
            </Route>
        </Routes>
    )
}

export default App;