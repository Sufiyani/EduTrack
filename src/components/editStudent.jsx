import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { db } from "../firebase";

function EditStudent({ student, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const addStudentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .min(10, "Invalid Phone Number")
      .required("Phone Number is Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: addStudentSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const docRef = doc(db, "add-student", student.id);
        const data = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          timestamp: serverTimestamp(),
        };
        await updateDoc(docRef, data);
        toast("Student record has been updated!");
        onClose();
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  // Populate form when student changes
  useEffect(() => {
    if (student) {
      formik.setValues({
        name: student.name || "",
        email: student.email || "",
        phone: student.phone || "",
      });
    }
  }, [student]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Student Profile</DialogTitle>
          <DialogDescription>
            Update student details below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            {formik.errors.name && formik.touched.name && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.name}
              </span>
            )}
            <div className="grid gap-3">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your Email"
              />
            </div>
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.email}
              </span>
            )}
            <div className="grid gap-3">
              <Label htmlFor="edit-phone">Phone</Label>
              <Input
                id="edit-phone"
                name="phone"
                type="telephone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder="Phone Number"
              />
            </div>
            {formik.errors.phone && formik.touched.phone && (
              <span className="text-red-500 text-[12px]">
                {formik.errors.phone}
              </span>
            )}
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditStudent;