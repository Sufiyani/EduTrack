// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { auth } from "../firebase";
// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   sendEmailVerification,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import useAppStore from "../store";

// function Login() {
//   const initialValues = {
//     email: "",
//     password: "",
//   };
//   const loginSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { setUserId } = useAppStore();
//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: loginSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         const checkUser = await signInWithEmailAndPassword(
//           auth,
//           values.email,
//           values.password
//         );
//         if (checkUser) {
//           // const { user: { emailVerified } } = checkUser;
//           if (checkUser?.user?.emailVerified) {
//             toast("Login Successfully");
//             setUserId(checkUser?.user?.uid);
//             navigate("/add-student");
//           } else {
//             await sendEmailVerification(auth.currentUser);
//             toast("Please verified your email to proceed further");
//           }
//         } else {
//           toast("Please create an account to proceed");
//         }
//       } catch (error) {
//         toast(error.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Card className="w-full max-w-sm">
//         <CardHeader>
//           <CardTitle>Login to your account</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                 />
//               </div>
//               {formik.errors.email && formik.touched.email && (
//                 <span className="text-red-500 text-[12px]">
//                   {formik.errors.email}
//                 </span>
//               )}
//               <div className="grid gap-2">
//                 <div className="flex items-center">
//                   <Label htmlFor="password">Password</Label>
//                   <Link
//                     to="/forgot-password"
//                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </Link>
//                 </div>
//                 <Input
//                   id="password"
//                   name="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   type="password"
//                   required
//                 />
//               </div>
//               {formik.errors.password && formik.touched.password && (
//                 <span className="text-red-500 text-[12px]">
//                   {formik.errors.password}
//                 </span>
//               )}
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex-col gap-2">
//           <Button
//             onClick={() => {
//               formik.submitForm();
//             }}
//             disabled={loading}
//             className="w-full"
//           >
//             {loading ? "Logging..." : "Log In"}
//           </Button>
//           <p className="text-sm text-center">
//             Don't have an account?{" "}
//             <Link to="/signup" className="underline cursor-pointer">
//               Create New Account
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  GraduationCap,
  Users,
  UserPlus,
  Menu,
  Moon,
  Sun,
  User,
  LogOut
} from "lucide-react";

const menuItems = [
  { title: "Add Student", url: "add-student", icon: UserPlus },
  { title: "Add Trainer", url: "add-trainer", icon: Users },
];

export default function Dashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex flex-col h-full">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              Student Portal
            </div>
            <div className="px-2 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:ml-0">
          {/* Header */}
          <div className="p-4 flex justify-between items-center w-full bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
              >
                <Menu size={20} className="text-blue-600" />
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
            </div>
            <div className="gap-3 flex items-center justify-center">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
              >
                {darkMode ? (
                  <Sun size={20} className="text-blue-600" />
                ) : (
                  <Moon size={20} className="text-blue-600" />
                )}
              </button>
              
              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
                >
                  <User size={20} className="text-blue-600" />
                </button>
                
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border-0 py-2 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-2">
                      <User size={16} />
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-2">
                      <Settings size={16} />
                      Settings
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center gap-2">
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 flex-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}