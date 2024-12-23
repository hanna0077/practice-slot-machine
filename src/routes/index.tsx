import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ranking from "@pages/ranking";
import SlotMachine from "@pages/slotmachine";
import Info from "@pages/info";
import DefaultLayout from "@pages/layouts/Default";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Ranking />,
      },
      {
        path: "/slotMachine",
        element: <SlotMachine />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
