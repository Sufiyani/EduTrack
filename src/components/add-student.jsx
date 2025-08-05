import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { db } from "../firebase";

// function AddStudent() {
//   const [loading, setLoading] = useState(false);
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//   };

//   const addStudentSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string()
//       .min(10, "Invalid Phone Number")
//       .required("Phone Number is Required"),
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema: addStudentSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         const collectionRef = collection(db, "add-student");

//         const emailToCheck = values.email.toLowerCase();
//         const q = query(collectionRef, where("email", "==", emailToCheck));
//         const snapshot = await getDocs(q);

//         if (!snapshot.empty) {
//           toast("A student with this email already exists.");
//           setLoading(false);
//           return;
//         }

//         const data = {
//           name: values.name,
//           email: emailToCheck,
//           phone: values.phone,
//           timestamp: serverTimestamp(),
//         };
//         const docRef = await addDoc(collectionRef, data);
//         if (docRef) {
//           formik.resetForm();
//           toast("Student record has been added!");
//         }
//       } catch (error) {
//         toast(error?.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <Dialog>
//       <form>
//         <DialogTrigger asChild>
//           <Button variant="outline">Add Student</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Student Profile</DialogTitle>
//             <DialogDescription>
//               Please insert student details below
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4">
//             <div className="grid gap-3">
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 placeholder="Enter Your Name"
//               />
//               {formik.errors.name && formik.touched.name && (
//                 <span className="text-red-500 text-[12px]">
//                   {formik.errors.name}
//                 </span>
//               )}
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 placeholder="Enter your Email"
//               />
//               {formik.errors.email && formik.touched.email && (
//                 <span className="text-red-500 text-[12px]">
//                   {formik.errors.email}
//                 </span>
//               )}
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="phone">Phone</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 placeholder="Phone Number"
//               />
//               {formik.errors.phone && formik.touched.phone && (
//                 <span className="text-red-500 text-[12px]">
//                   {formik.errors.phone}
//                 </span>
//               )}
//             </div>
//           </div>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DialogClose>
//             <Button
//               type="button"
//               onClick={() => formik.submitForm()}
//               disabled={loading}
//             >
//               {loading ? "Saving..." : "Save"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//     </Dialog>
//   );
// }

// export default AddStudent;


// ...imports remain the same

function AddStudent() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const addStudentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().min(10, "Invalid Phone Number").required("Phone Number is Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: addStudentSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "add-student");
        const emailToCheck = values.email.toLowerCase();
        const q = query(collectionRef, where("email", "==", emailToCheck));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          toast("A student with this email already exists.");
          setLoading(false);
          return;
        }

        const data = {
          name: values.name,
          email: emailToCheck,
          phone: values.phone,
          timestamp: serverTimestamp(),
        };

        const docRef = await addDoc(collectionRef, data);
        if (docRef) {
          formik.resetForm();
          toast("Student record has been added!");
        }
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Add Student
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-xl shadow-2xl border-0 bg-white/95 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Student Profile
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please insert student details below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {["name", "email", "phone"].map((field) => (
              <div className="grid gap-2" key={field}>
                <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                <Input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  placeholder={`Enter ${field}`}
                  className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                {formik.errors[field] && formik.touched[field] && (
                  <span className="text-red-500 text-xs">{formik.errors[field]}</span>
                )}
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="rounded-md">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={() => formik.submitForm()}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-xl transition-all duration-200"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddStudent;
