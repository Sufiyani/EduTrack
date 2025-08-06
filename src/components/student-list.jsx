// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   onSnapshot,
//   query,
//   setDoc,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { useEffect, useState } from "react";
// import { Trash, Check, Edit } from "lucide-react";
// import { toast } from "sonner";
// import EditStudent from "./editStudent";

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const init = async () => {
//     const collectionRef = collection(db, "add-student");
//     const q = query(collectionRef);
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         const combinedDataWithId = { ...doc.data(), id: doc?.id };
//         data.push(combinedDataWithId);
//       });
//       setStudents(data);
//     });
//     return unsubscribe;
//   };

//   const deleteStudent = async (id) => {
//     try {
//       const documentRef = doc(db, "add-student", id);
//       await deleteDoc(documentRef);
//       toast("Record has been deleted");
//     } catch (error) {
//       toast(error?.message);
//     }
//   };

//   const markPresent = async (student) => {
//     try {
//       const today = new Date().toDateString();
//       const attendanceRef = doc(db, "student-attendance", student.id);
//       const attendanceSnap = await getDoc(attendanceRef);

//       if (attendanceSnap.exists()) {
//         const existingData = attendanceSnap.data();
//         const updatedLog = {
//           ...existingData,
//           [today]: true,
//         };
//         await setDoc(attendanceRef, updatedLog);
//       } else {
//         const newData = {
//           name: student.name,
//           email: student.email,
//           phone: student.phone,
//           [today]: true,
//         };
//         await setDoc(attendanceRef, newData);
//       }

//       toast(`${student.name} marked as present`);
//     } catch (error) {
//       toast("Error marking present: " + error.message);
//     }
//   };

//   const handleEditClick = (student) => {
//     setEditingStudent(student);
//     setIsEditModalOpen(true);
//   };

//   const handleEditClose = () => {
//     setEditingStudent(null);
//     setIsEditModalOpen(false);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             {/* <TableHead className="w-[100px]">ID</TableHead> */}
//             <TableHead>Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Phone Number</TableHead>
//             <TableHead>Attendance</TableHead>
//             <TableHead>Edit</TableHead>
//             <TableHead>Delete</TableHead>
//           </TableRow>
//         </TableHeader>
       

// <TableBody>
//   {students.map((student) => (
//     <TableRow key={student.id} className="hover:bg-gray-50 transition">
//       <TableCell>{student.name}</TableCell>
//       <TableCell>{student.email}</TableCell>
//       <TableCell>{student.phone}</TableCell>
//       <TableCell className="flex gap-2">
//         <Check
//           size={18}
//           className="text-green-600 hover:text-green-700 cursor-pointer transition"
//           onClick={() => markPresent(student)}
//         />
//       </TableCell>
//       <TableCell>
//         <Edit
//           size={18}
//           className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
//           onClick={() => handleEditClick(student)}
//         />
//       </TableCell>
//       <TableCell>
//         <Trash
//           size={18}
//           className="text-red-600 hover:text-red-800 cursor-pointer transition"
//           onClick={() => deleteStudent(student.id)}
//         />
//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>

//       </Table>

//       <EditStudent
//         student={editingStudent}
//         isOpen={isEditModalOpen}
//         onClose={handleEditClose}
//       />
//     </>
//   );
// }

// export default StudentList;






// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDoc,
//   onSnapshot,
//   query,
//   setDoc,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { useEffect, useState } from "react";
// import { Trash, Check, Edit } from "lucide-react";
// import { toast } from "sonner";
// import EditStudent from "./editStudent";

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [editingStudent, setEditingStudent] = useState(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   const init = async () => {
//     const collectionRef = collection(db, "add-student");
//     const q = query(collectionRef);
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         const combinedDataWithId = { ...doc.data(), id: doc?.id };
//         data.push(combinedDataWithId);
//       });
//       setStudents(data);
//     });
//     return unsubscribe;
//   };

//   const deleteStudent = async (id) => {
//     try {
//       const documentRef = doc(db, "add-student", id);
//       await deleteDoc(documentRef);
//       toast("Record has been deleted");
//     } catch (error) {
//       toast(error?.message);
//     }
//   };

//   const markPresent = async (student) => {
//     try {
//       const today = new Date().toDateString();
//       const attendanceRef = doc(db, "student-attendance", student.id);
//       const attendanceSnap = await getDoc(attendanceRef);

//       if (attendanceSnap.exists()) {
//         const existingData = attendanceSnap.data();
//         const updatedLog = {
//           ...existingData,
//           [today]: true,
//         };
//         await setDoc(attendanceRef, updatedLog);
//       } else {
//         const newData = {
//           name: student.name,
//           email: student.email,
//           phone: student.phone,
//           [today]: true,
//         };
//         await setDoc(attendanceRef, newData);
//       }

//       toast(`${student.name} marked as present`);
//     } catch (error) {
//       toast("Error marking present: " + error.message);
//     }
//   };

//   const handleEditClick = (student) => {
//     setEditingStudent(student);
//     setIsEditModalOpen(true);
//   };

//   const handleEditClose = () => {
//     setEditingStudent(null);
//     setIsEditModalOpen(false);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <div className="p-4 bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300 rounded-lg shadow-sm">
//       <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//       <Table>
//         <TableHeader>
//           <TableRow className="bg-gray-100 dark:bg-gray-800">
//             <TableHead className="text-black dark:text-white">Name</TableHead>
//             <TableHead className="text-black dark:text-white">Email</TableHead>
//             <TableHead className="text-black dark:text-white">Phone Number</TableHead>
//             <TableHead className="text-black dark:text-white">Attendance</TableHead>
//             <TableHead className="text-black dark:text-white">Edit</TableHead>
//             <TableHead className="text-black dark:text-white">Delete</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phone}</TableCell>
//               <TableCell className="flex gap-2">
//                 <Check
//                   size={18}
//                   className="text-green-600 hover:text-green-700 cursor-pointer transition"
//                   onClick={() => markPresent(student)}
//                 />
//               </TableCell>
//               <TableCell>
//                 <Edit
//                   size={18}
//                   className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
//                   onClick={() => handleEditClick(student)}
//                 />
//               </TableCell>
//               <TableCell>
//                 <Trash
//                   size={18}
//                   className="text-red-600 hover:text-red-800 cursor-pointer transition"
//                   onClick={() => deleteStudent(student.id)}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <EditStudent
//         student={editingStudent}
//         isOpen={isEditModalOpen}
//         onClose={handleEditClose}
//       />
//     </div>
//   );
// }

// export default StudentList;





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
    <div className="bg-white/95 dark:bg-[#0f172a] backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Student List</h2>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="text-black dark:text-white">Name</TableHead>
              <TableHead className="text-black dark:text-white">Email</TableHead>
              <TableHead className="text-black dark:text-white">Phone Number</TableHead>
              <TableHead className="text-black dark:text-white">Attendance</TableHead>
              <TableHead className="text-black dark:text-white">Edit</TableHead>
              <TableHead className="text-black dark:text-white">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>
                  <Check
                    size={18}
                    className="text-green-600 hover:text-green-700 cursor-pointer transition"
                    onClick={() => markPresent(student)}
                  />
                </TableCell>
                <TableCell>
                  <Edit
                    size={18}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
                    onClick={() => handleEditClick(student)}
                  />
                </TableCell>
                <TableCell>
                  <Trash
                    size={18}
                    className="text-red-600 hover:text-red-800 cursor-pointer transition"
                    onClick={() => deleteStudent(student.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <EditStudent
        student={editingStudent}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
      />
    </div>
  );
}

export default StudentList;
