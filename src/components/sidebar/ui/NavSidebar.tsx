import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { paths } from "@/config/paths/paths";
// todo ---  убрать кааашку и прикрутиь тип
import { MapCow } from "../api/axios-coworkig";
import { Building2, ChevronDown } from "lucide-react";

// Todo тут будут список коворкингов + линка наа создание новго ковворкинга
export const NavSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="gap-2">
                    <span className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Коворкинги
                    </span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {MapCow.map((el) => (
                      <SidebarMenuItem key={el.id}>
                        <SidebarMenuButton
                          onClick={() => {
                            navigate(paths.app.coworking(el.id));
                          }}
                        >
                          {el.name}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}

                    <SidebarMenuSubItem>
                      <Button
                        size={"sm"}
                        onClick={() => {
                          navigate(paths.app.coworking("new"));
                        }}
                      >
                        Добавить ковворкинг
                      </Button>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroupContent>

        <SidebarMenu>
          <SidebarMenuButton
            onClick={() => {
              navigate(paths.app.profile());
            }}
          >
            Профиль
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
};
