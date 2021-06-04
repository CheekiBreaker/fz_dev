import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Count from "./pages/Counter";
import Index from "./pages/Index";
import Library from "./pages/Library";
import Menu from "./pages/Menu";
import Personal from "./pages/Personal";
import Products from "./pages/Products";
import { ADMIN_ROUTE,LIBRARY_ROUTE, LOGIN_ROUTE, MENU_ROUTE, PERSONAL_ROUTE, REGISTRATION_ROUTE, COUNTER_ROUTE, INDEX_ROUTE, PRODUCTS_ROUTE} from "./paths/const";


/*
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component:Admin
    },

    {
        path: MENU_ROUTE,
        Component: Menu
    },

    {
        path: PERSONAL_ROUTE,
        Component: Personal
    },

];*/

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
    {
        path: ADMIN_ROUTE,
        Component:Admin
    },

    {
        path: MENU_ROUTE,
        Component: Menu
    },

    {
        path: PERSONAL_ROUTE,
        Component: Personal
    },
    {
        path:COUNTER_ROUTE,
        Component:Count
    },
    {
        path:INDEX_ROUTE,
        Component:Index
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    }
];