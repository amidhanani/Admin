import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Tables, Notifications, Products } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Dinkal from "./pages/dashboard/dinkal";

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
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "order Detail",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Invoice",
        path: "/dinkal",
        element: <Dinkal />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Add Products",
        path: "/products",
        element: <Products />,
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
