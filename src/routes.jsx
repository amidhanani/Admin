import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home,  } from "@/pages/dashboard";
import Dinkal from "./pages/dashboard/dinkal";
import Product from "./pages/dashboard/products";
import Notifications from "./pages/dashboard/notifications";
import Productview from "./pages/dashboard/productview";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "productview",
        path: "/productview",
        element: <Productview />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "order Detail",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Register Record",
        path: "/dinkal",
        element: <Dinkal />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Add Products",
        path: "/products",
        element: <Product />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Review",
        path: "/payment",
        element: <Notifications />,
      },
      
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
