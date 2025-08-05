// import {
//   Calendar,
//   Home,
//   Inbox,
//   Search,
//   Settings
// } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarTrigger
// } from "@/components/ui/sidebar";

// import { ModeToggle } from "../mode-toggle";
// import ProfileMenu from "../profile-menu";

// const menuItems = [
//   { title: "Add Student", url: "add-student", icon: Home },
//   { title: "Add Trainer", url: "add-trainer", icon: Inbox },
// ];

// export default function Dashboard({ children }) {
//   return (
//     <SidebarProvider>
//       <Sidebar>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Student Portal</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {menuItems.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <a href={item.url} className="flex items-center gap-2">
//                         <item.icon size={18} />
//                         <span>{item.title}</span>
//                       </a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>

//       <main className="w-screen">
//         <div className="p-2 flex justify-between items-center w-full border-2">
//           <SidebarTrigger />
//           <div className="gap-2 flex items-center justify-center">
//             <ModeToggle />
//             <ProfileMenu />
//           </div>
//         </div>

//         {/* 🔽 Add this line to render children */}
//         <div className="p-4">{children}</div>
//       </main>
//     </SidebarProvider>
//   );
// }
import {
  Home,
  Inbox,
  GraduationCap
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
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 dark:text-white">
        
        {/* Sidebar */}
        <Sidebar className="backdrop-blur-md bg-white/90 dark:bg-gray-900/80 border-r border-gray-200 dark:border-gray-800 shadow-md">
          <SidebarContent>
            <SidebarGroup>
              
              {/* Logo + Heading Centered */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <SidebarGroupLabel className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mt-2">
                  Student Portal
                </SidebarGroupLabel>
              </div>

              {/* Menu Items - icon left, text right, centered block */}
              <SidebarGroupContent>
                <SidebarMenu className="flex flex-col items-center w-full">
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title} className="w-full flex justify-center">
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className="flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        >
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

        {/* Main Content */}
        <main className="flex-1 w-full">
          
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
            <SidebarTrigger />
            <div className="flex items-center gap-3">
              <ModeToggle />
              <ProfileMenu />
            </div>
          </div>

          {/* Dynamic Page Content */}
          <div className="p-4">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
