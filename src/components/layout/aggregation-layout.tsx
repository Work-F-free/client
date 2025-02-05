import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { ModalAuth } from "@/feature/auth";
import { Footer } from "../footer/footer";

export const AggregationLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ModalAuth />
    </>
  );
};
