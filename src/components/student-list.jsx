import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { Trash, Check, Edit } from "lucide-react";
import { toast } from "sonner";
import EditStudent from "./editStudent";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const init = async () => {
    const collectionRef = collection(db, "add-student");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const combinedDataWithId = { ...doc.data(), id: doc?.id };
        data.push(combinedDataWithId);
      });
      setStudents(data);
    });
    return unsubscribe;
  };

  const deleteStudent = async (id) => {
    try {
      const documentRef = doc(db, "add-student", id);
      await deleteDoc(documentRef);
      toast("Record has been deleted");
    } catch (error) {
      toast(error?.message);
    }
  };

  const markPresent = async (student) => {
    try {
      const today = new Date().toDateString();
      const attendanceRef = doc(db, "student-attendance", student.id);
      const attendanceSnap = await getDoc(attendanceRef);

      if (attendanceSnap.exists()) {
        const existingData = attendanceSnap.data();
        const updatedLog = {
          ...existingData,
          [today]: true,
        };
        await setDoc(attendanceRef, updatedLog);
      } else {
        const newData = {
          name: student.name,
          email: student.email,
          phone: student.phone,
          [today]: true,
        };
        await setDoc(attendanceRef, newData);
      }

      toast(`${student.name} marked as present`);
    } catch (error) {
      toast("Error marking present: " + error.message);
    }
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setIsEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditingStudent(null);
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">ID</TableHead> */}
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow>
              {/* <TableCell className="font-medium">{student.id}</TableCell> */}
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell className="flex gap-2">
                <Check
                  size={16}
                  className="text-green-600 cursor-pointer"
                  onClick={() => markPresent(student)}
                />
              </TableCell>
               <TableCell>
                  <Edit
                    size={16}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => {
                      handleEditClick(student);
                    }}
                  />
                </TableCell>
                 <TableCell>
                  <Trash
                    size={16}
                   className="text-red-600 cursor-pointer"
                  onClick={() => deleteStudent(student?.id)}
                /> 
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditStudent
        student={editingStudent}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
      />
    </>
  );
}

export default StudentList;








