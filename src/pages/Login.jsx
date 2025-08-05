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



import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Lock } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "sonner";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAppStore from "../store";
import { Link, useNavigate } from "react-router-dom";

// Your complete Login component with styling
function Login ()  {
  // Your existing state and imports
  const initialValues = {
    email: "",
    password: "",
  };
  
  // Your existing Yup schema (you'll need to import Yup)
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserId } = useAppStore();
  

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const checkUser = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        if (checkUser) {
          if (checkUser?.user?.emailVerified) {
            toast("Login Successfully");
            setUserId(checkUser?.user?.uid);
            navigate("/add-student");
          } else {
            await sendEmailVerification(auth.currentUser);
            toast("Please verified your email to proceed further");
          }
        } else {
          toast("Please create an account to proceed");
        }
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    },
  });



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex justify-center items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-sm relative backdrop-blur-sm bg-white/95 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Login to your account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-500 text-[12px] flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                {formik.errors.email}
              </span>
            )}
            
            <div className="grid gap-2">
                 <div className="flex items-center">
                   <Label htmlFor="password">Password</Label>
                   <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  required
                  className="pl-10 h-12 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>
            {formik.errors.password && formik.touched.password && (
              <span className="text-red-500 text-[12px] flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                {formik.errors.password}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-4">
        <Button
  onClick={() => {
    formik.submitForm();
  }}
  disabled={loading}
  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-70"
>
  {loading ? (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Logging...</span>
    </div>
  ) : (
    "Log In"
  )}
</Button>

         <p className="text-sm text-center">
             Don't have an account?{" "}
             <Link to="/signup" className="underline cursor-pointer">
               Create New Account
             </Link>
           </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
