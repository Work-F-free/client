import {Outlet} from "react-router-dom";
import {Header} from "@/components/header";

export const AggregationLayout = () => {
  return (
      <>
        <Header/>
        <Outlet/>
      </>
  );
};