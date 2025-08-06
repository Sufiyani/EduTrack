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


// import { useState } from "react";
// import {
//   Calendar,
//   Home,
//   Inbox,
//   Search,
//   Settings,
//   GraduationCap,
//   Users,
//   UserPlus,
//   Menu,
//   Moon,
//   Sun,
//   User,
//   LogOut
// } from "lucide-react";

// const menuItems = [
//   { title: "Add Student", url: "add-student", icon: UserPlus },
//   { title: "Add Trainer", url: "add-trainer", icon: Users },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
//           <div className="flex flex-col h-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <GraduationCap className="w-5 h-5 text-white" />
//               </div>
//               Student Portal
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col lg:ml-0">
//           {/* Header */}
//           <div className="p-4 flex justify-between items-center w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={20} className="text-blue-600" />
//               </button>
//               <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Dashboard
//               </h1>
//             </div>
//             <div className="gap-3 flex items-center justify-center">
//               {/* Dark Mode Toggle */}
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
//               >
//                 {darkMode ? (
//                   <Sun size={20} className="text-blue-600" />
//                 ) : (
//                   <Moon size={20} className="text-blue-600" />
//                 )}
//               </button>
              
//               {/* Profile Menu */}
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileMenuOpen(!profileMenuOpen)}
//                   className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
//                 >
//                   <User size={20} className="text-blue-600" />
//                 </button>
                
//                 {profileMenuOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border-0 py-2 z-50">
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-2">
//                       <User size={16} />
//                       Profile
//                     </button>
//                     <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-2">
//                       <Settings size={16} />
//                       Settings
//                     </button>
//                     <hr className="my-1 border-gray-200" />
//                     <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center gap-2">
//                       <LogOut size={16} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="p-6 flex-1">
//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import {
//   Calendar,
//   Home,
//   Inbox,
//   Search,
//   Settings,
//   GraduationCap,
//   Users,
//   UserPlus,
//   Menu
// } from "lucide-react";

// // Mock ModeToggle component
// const ModeToggle = () => {
//   const [isDark, setIsDark] = useState(false);
  
//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
//     >
//       {isDark ? "🌞" : "🌙"}
//     </button>
//   );
// };

// // Mock ProfileMenu component
// const ProfileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
//       >
//         👤
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</a>
//           <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
//           <hr className="my-1" />
//           <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
//         </div>
//       )}
//     </div>
//   );
// };

// const menuItems = [
//   { title: "Add Student", url: "add-student", icon: UserPlus },
//   { title: "Add Trainer", url: "add-trainer", icon: Users },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
//           <div className="flex flex-col h-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <GraduationCap className="w-5 h-5 text-white" />
//               </div>
//               Admin Portal
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col lg:ml-0">
//           {/* Header */}
//           <div className="p-4 flex justify-between items-center w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={20} className="text-blue-600" />
//               </button>
// <div className="text-center">
//   <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//     Dashboard
//   </h1>
// </div>

//             </div>
//             <div className="gap-3 flex items-center justify-center">
//               <div className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ModeToggle />
//               </div>
//               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ProfileMenu />
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="p-6 flex-1">
//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import {
//   GraduationCap,
//   Menu,
// } from "lucide-react";
// import {
//   Calendar,
//   Home,
//   Inbox,
//   Search,
//   Settings
// } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";
// import ProfileMenu from "@/components/profile-menu";

// const menuItems = [
//   { title: "Add Student", url: "add-student", icon: Home  },
//   { title: "Add Trainer", url: "add-trainer", icon: Home },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
//           <div className="flex flex-col h-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <GraduationCap className="w-5 h-5 text-white" />
//               </div>
//               Admin Portal
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col lg:ml-0">
//           {/* Header */}
//           <div className="p-4 flex justify-between items-center w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={20} className="text-blue-600" />
//               </button>
//               <div className="text-center">
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Dashboard
//                 </h1>
//               </div>
//             </div>
//             <div className="gap-3 flex items-center justify-center">
//               <div className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ModeToggle />
//               </div>
//               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ProfileMenu />
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="p-6 flex-1">
//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import {
//   GraduationCap,
//   Menu,Home
// } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";
// import ProfileMenu from "@/components/profile-menu";

// const menuItems = [
//   { title: "Add Student", url: "add-student", icon: Home  },
//   { title: "Add Trainer", url: "add-trainer", icon: Home },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
//           <div className="flex flex-col h-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <GraduationCap className="w-5 h-5 text-white" />
//               </div>
//               Admin Portal
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col lg:ml-0">
//           {/* Header */}
//           <div className="p-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={20} className="text-blue-600 dark:text-blue-400" />
//               </button>
//               <div className="text-center">
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Dashboard
//                 </h1>
//               </div>
//             </div>
//             <div className="gap-3 flex items-center justify-center">
//               <div className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ModeToggle />
//               </div>
//               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ProfileMenu />
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="p-6 flex-1">
//             <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
//               <div className="text-gray-900 dark:text-gray-100">
//                 {children || (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
//                     <p className="text-gray-600 dark:text-gray-400">Your content will appear here.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useState } from "react";
import {
  GraduationCap,
  Menu,
  Home,
  X
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import ProfileMenu from "@/components/profile-menu";

const menuItems = [
  { title: "Add Student", url: "add-student", icon: Home },
  { title: "Add Trainer", url: "add-trainer", icon: Home },
];

export default function Dashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
          <div className="flex flex-col h-full w-full">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              Admin Portal
            </div>
            <div className="px-2 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Sidebar - Overlay */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className="flex flex-col h-full">
            {/* Mobile Header with Close Button */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                Admin Portal
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
              >
                <X size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            
            {/* Mobile Menu Items */}
            <div className="px-3 py-4 space-y-2 flex-1 overflow-y-auto">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => setSidebarOpen(false)}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className={`flex-1 flex flex-col min-w-0 ${window.innerWidth >= 1024 ? 'lg:ml-64' : ''}`}>
          {/* Header - Responsive */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
              >
                <Menu size={18} className="text-blue-600 dark:text-blue-400" />
              </button>
              <div className="text-center">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
              </div>
            </div>
            <div className="gap-2 sm:gap-3 flex items-center justify-center">
              <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
                <ModeToggle />
              </div>
              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
                <ProfileMenu />
              </div>
            </div>
          </div>

          {/* Content Area - Responsive */}
          <div className="p-3 sm:p-4 lg:p-6 flex-1">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-0 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
              <div className="text-gray-900 dark:text-gray-100 w-full overflow-hidden">
                {children || (
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Welcome to Dashboard</h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Your content will appear here.</p>
                    
                    {/* Mobile-friendly welcome cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Students</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">Manage student records and information</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Trainers</h3>
                        <p className="text-purple-600 dark:text-purple-400 text-sm">Manage trainer profiles and schedules</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}