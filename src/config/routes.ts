import IRoute from "../interfaces/route";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    }, 
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    }, 
    {
        path: '*',
        name: 'Home',
        component: HomePage
    }
];

export default routes;