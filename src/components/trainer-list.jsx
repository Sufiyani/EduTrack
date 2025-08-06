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
//   onSnapshot,
//   query,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { useEffect, useState } from "react";
// import { Trash } from "lucide-react";
// import { toast } from "sonner";

// function StudentList() {
//   const [trainer, setTrainer] = useState([]);

//   const init = async () => {
//     const collectionRef = collection(db, "add-trainer");
//     const q = query(collectionRef);
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         const combinedDataWithId = { ...doc.data(), id: doc?.id };
//         data.push(combinedDataWithId);
//       });
//       setTrainer(data);
//     });
//     return unsubscribe;
//   };

//   const deleteStudent = async (id) => {
//     try {
//       const documentRef = doc(db, "add-trainer", id);
//       await deleteDoc(documentRef);
//       toast("Record has been deleted");
//     } catch (error) {
//       toast(error?.message);
//     }
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">ID</TableHead>
//           <TableHead>Name</TableHead>
//           <TableHead>Email</TableHead>
//           <TableHead>Phone Number</TableHead>
//           <TableHead>Action</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {trainer.map((student) => {
//           return (
//             <TableRow key={student.id}>
//               <TableCell className="font-medium">{student.id}</TableCell>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phone}</TableCell>
//               <TableCell>
//                 <Trash
//                   size={16}
//                   onClick={() => {
//                     deleteStudent(student?.id);
//                   }}
//                 />
//               </TableCell>
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </Table>
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
import EditTrainer from "./editTrainer";

function TrainerList() {
  const [trainers, setTrainers] = useState([]);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const init = async () => {
    const collectionRef = collection(db, "add-trainer");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const combinedDataWithId = { ...doc.data(), id: doc?.id };
        data.push(combinedDataWithId);
      });
      setTrainers(data);
    });
    return unsubscribe;
  };

  const deleteStudent = async (id) => {
    try {
      const documentRef = doc(db, "add-trainer", id);
      await deleteDoc(documentRef);
      toast("Record has been deleted");
    } catch (error) {
      toast(error?.message);
    }
  };

  const markPresent = async (trainer) => {
    try {
      const today = new Date().toDateString();
      const attendanceRef = doc(db, "trainer-attendance", trainer.id);
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
          name: trainer.name,
          email: trainer.email,
          phone: trainer.phone,
          [today]: true,
        };
        await setDoc(attendanceRef, newData);
      }

      toast(`${trainer.name} marked as present`);
    } catch (error) {
      toast("Error marking present: " + error.message);
    }
  };

  const handleEditClick = (trainer) => {
    setEditingTrainer(trainer);
    setIsEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditingTrainer(null);
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
            {trainers.map((trainer) => (
              <TableRow
                key={trainer.id}
                className="hover:bg-blue-50 dark:hover:bg-gray-800 transition"
              >
                <TableCell>{trainer.name}</TableCell>
                <TableCell>{trainer.email}</TableCell>
                <TableCell>{trainer.phone}</TableCell>
                <TableCell>
                  <Check
                    size={18}
                    className="text-green-600 hover:text-green-700 cursor-pointer transition"
                    onClick={() => markPresent(trainer)}
                  />
                </TableCell>
                <TableCell>
                  <Edit
                    size={18}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
                    onClick={() => handleEditClick(trainer)}
                  />
                </TableCell>
                <TableCell>
                  <Trash
                    size={18}
                    className="text-red-600 hover:text-red-800 cursor-pointer transition"
                    onClick={() => deleteStudent(trainer.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <EditTrainer
        trainer={editingTrainer}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
      />
    </div>
  );
}

export default TrainerList;
