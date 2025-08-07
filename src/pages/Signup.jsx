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
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import { auth, db } from "../firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { UserPlus ,User,Mail,Lock} from "lucide-react";


function Signup  ()  {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password Cannot be less than 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        if (createUser) {
          await sendEmailVerification(auth.currentUser);
          await addDoc(collection(db, "users"), {
            name: values.name,
            email: values.email,
            timestamp: Date.now(),
          });
          toast(
            "User has been created. Please Verified your Email through Spam Section in your Gmail Account"
          );
          formik.resetForm();
          navigate("/login");
        }
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-sm relative backdrop-blur-sm bg-white/95 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Create an account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-purple-500 transition-colors" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Sufiyan"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
              {formik.errors.name && formik.touched.name && (
                <span className="text-red-500 text-[12px] flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  {formik.errors.name}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-purple-500 transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="pl-10 h-11 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-500 text-[12px] flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-purple-500 transition-colors" />
                <Input
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                 className="pl-10 h-12 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <span className="text-red-500 text-[12px] flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-purple-500 transition-colors" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  type="password"
                  className="pl-10 h-12 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-300"
                />
              </div>
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <span className="text-red-500 text-[12px] flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  {formik.errors.confirmPassword}
                </span>
              )}
            </div>
          </div>
        </CardContent>
              <CardFooter>
            <div className="w-full">
              <Button
                onClick={() => {
                  formik.submitForm();
                }}
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium transition-colors duration-200 cursor-pointer"
                >
                  Log in
                </Link>
              </p>
            </div>
          </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;