import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <p>RootLayout</p>

      <Outlet />
    </div>
  );
};
