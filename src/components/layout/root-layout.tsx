import { Outlet } from "react-router-dom";

import { AppSidebar } from "../sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Container } from "../container";

export const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <Container variant={"sidebar"}>
        <SidebarTrigger />
        <Outlet />
      </Container>
    </SidebarProvider>
  );
};
