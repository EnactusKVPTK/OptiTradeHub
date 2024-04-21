import Admin from "./pages/Admin";
import {ADMIN_ROUTE, NOTIFICATION_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, LOCATION_ROUTE, USER_ROUTE, ABOUT_ROUTE, HELP_ROUTE, NOTIFICATION, FAQ_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Location from "./pages/Location";
import User from "./pages/User";
import About from "./pages/About";
import Help from "./pages/Help";
import Notification from "./pages/Notification";
import FAQ from "./pages/FAQ";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: LOCATION_ROUTE,
        Component: Location
    }, 
    {
        path: NOTIFICATION_ROUTE,
        Component: Notification
    },
    {
        path: HELP_ROUTE,
        Component: Help
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
