import { Sidebar, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar";
import { NavSidebar } from "./NavSidebar";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroup>
          <h4>Голиков Ефим</h4>
        </SidebarGroup>
      </SidebarHeader>

      <NavSidebar />
    </Sidebar>
  );
};
