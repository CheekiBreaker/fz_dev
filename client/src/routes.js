import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Library from "./pages/Library";
import Menu from "./pages/Menu";
import Personal from "./pages/Personal";
import { ADMIN_ROUTE, LIBRARY_ROUTE, LOGIN_ROUTE, MENU_ROUTE, PERSONAL_ROUTE, REGISTRATION_ROUTE } from "./paths/const";



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component : Admin
    },

    {
        path: MENU_ROUTE,
        Component: Menu
    },

    {
        path: PERSONAL_ROUTE,
        Component: Personal
    },

];

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },

    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    
    {
        path: LIBRARY_ROUTE,
        Component: Library
    },
];