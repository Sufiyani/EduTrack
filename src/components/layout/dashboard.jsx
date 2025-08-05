import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

import { ModeToggle } from "../mode-toggle";
import ProfileMenu from "../profile-menu";

const menuItems = [
  { title: "Add Student", url: "add-student", icon: Home },
  { title: "Add Trainer", url: "add-trainer", icon: Inbox },
];

export default function Dashboard({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Student Portal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon size={18} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="w-screen">
        <div className="p-2 flex justify-between items-center w-full border-2">
          <SidebarTrigger />
          <div className="gap-2 flex items-center justify-center">
            <ModeToggle />
            <ProfileMenu />
          </div>
        </div>

        {/* 🔽 Add this line to render children */}
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}

