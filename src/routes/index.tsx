import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ranking from "@pages/ranking";
import SlotMachine from "@pages/slotmachine";
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
