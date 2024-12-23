import { Outlet } from "react-router-dom";
import TheHeader from "@components/TheHeader";
export default function Default() {
  return (
    <>
      <TheHeader />
      <Outlet />
    </>
  );
}
