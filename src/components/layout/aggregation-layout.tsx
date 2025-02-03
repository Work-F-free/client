import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { ModalAuth } from "@/feature/auth";

export const AggregationLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <ModalAuth />
    </>
  );
};
