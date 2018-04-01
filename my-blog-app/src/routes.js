import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {App} from './components/App';

const routes = [
    {
        component: App,
        routes: [
            {
                path: "/",
                component: SignIn,
                exact: true
            },
            {
                path: "/signin",
                component: SignIn,
            },
            {
                path: "/signup",
                component: SignUp
            }
        ]
    }];

export default routes;