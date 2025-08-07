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

function EditTrainer({ trainer, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const addTrainerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().min(10, "Invalid Phone Number").required("Phone Number is Required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    validationSchema: addTrainerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const docRef = doc(db, "add-trainer", trainer.id);
        const data = {
          ...values,
          timestamp: serverTimestamp(),
        };
        await updateDoc(docRef, data);
        toast("Trainer record has been updated!");
        onClose();
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (trainer) {
      formik.setValues({
        name: trainer.name || "",
        email: trainer.email || "",
        phone: trainer.phone || "",
      });
    }
  }, [trainer]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-xl shadow-2xl border-0 bg-white/95 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Edit Trainer Profile
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Update trainer details below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 py-4">
            {["name", "email", "phone"].map((field) => (
              <div className="grid gap-2" key={field}>
                <Label htmlFor={`edit-${field}`}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  id={`edit-${field}`}
                  name={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  className="pl-10 h-12 border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-300"
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
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-xl transition-all duration-200"
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditTrainer;
