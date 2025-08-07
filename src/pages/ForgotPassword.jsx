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
import { Mail } from "lucide-react";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const forgetSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: forgetSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendPasswordResetEmail(auth, values.email);
        toast("Reset Email has been sent to your email.");
        formik.resetForm();
        navigate("/login");
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-sm relative backdrop-blur-sm bg-white/95 shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Forgot your password?
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your email and we'll send you a reset link.
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
                <span>Sending...</span>
              </div>
            ) : (
              "Send Reset Link"
            )}
          </Button>

          <p className="text-sm text-center">
            Remember your password?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Back to login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ForgotPassword;
