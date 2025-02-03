import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { paths } from "@/config/paths/paths";

export const ProtectRouter: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to={paths.lending.path} replace />;
};
