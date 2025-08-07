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
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { Trash, Check, Edit, Phone, Mail, User } from "lucide-react";
import { toast } from "sonner";
import EditTrainer from "./editTrainer";

function TrainerList() {
  const [trainers, setTrainers] = useState([]);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user] = useAuthState(auth); // Get current logged in user

  const init = async () => {
    if (!user) {
      setTrainers([]);
      return;
    }

    const collectionRef = collection(db, "add-trainer");
    const q = query(collectionRef, where("createdBy", "==", user.uid));
    
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

  const deleteTrainer = async (id) => {
    if (!user) {
      toast("Please login first");
      return;
    }

    try {
      const documentRef = doc(db, "add-trainer", id);
      await deleteDoc(documentRef);
      toast("Record has been deleted");
    } catch (error) {
      toast(error?.message);
    }
  };

  const markPresent = async (trainer) => {
    if (!user) {
      toast("Please login first");
      return;
    }

    try {
      const today = new Date().toDateString();
      const attendanceRef = doc(db, "trainer-attendance", `${user.uid}_${trainer.id}`);
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
          createdBy: user.uid, 
          trainerId: trainer.id,
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
    if (user) {
      init();
    } else {
      setTrainers([]);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="bg-white/95 dark:bg-[#0f172a] backdrop-blur-sm rounded-2xl shadow-xl border-0 p-3 sm:p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <User size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">Please login to view trainers</p>
          <p className="text-sm">You need to be authenticated to access this feature</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 dark:bg-[#0f172a] backdrop-blur-sm rounded-2xl shadow-xl border-0 p-3 sm:p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-140px)]">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
        Trainer List
      </h2>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden lg:block overflow-x-auto w-full bg-white dark:bg-gray-800 rounded-lg">
        <style jsx>{`
          .dark table,
          .dark tbody,
          .dark thead,
          .dark tr:not(:hover),
          .dark td,
          .dark th {
            background-color: rgb(31 41 55) !important;
          }
          .dark thead tr,
          .dark thead th {
            background-color: rgb(55 65 81) !important;
          }
          .dark tr:hover td {
            background-color: rgb(55 65 81) !important;
          }
        `}</style>
        <Table className="min-w-full text-sm">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-700">
              <TableHead className="text-black dark:text-white font-semibold">Name</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Email</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Phone Number</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Attendance</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Edit</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {trainers.map((trainer) => (
              <TableRow
                key={trainer.id}
                className="hover:bg-blue-50 dark:hover:bg-gray-700 transition bg-white dark:bg-gray-800"
              >
                <TableCell className="text-xs text-gray-900 dark:text-gray-100">{trainer.name}</TableCell>
                <TableCell className="text-xs break-all text-gray-900 dark:text-gray-100">{trainer.email}</TableCell>
                <TableCell className="text-xs text-gray-900 dark:text-gray-100">{trainer.phone}</TableCell>
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
                    onClick={() => deleteTrainer(trainer.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View - Hidden on desktop */}
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
          >
            {/* Trainer Name */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-500 dark:text-gray-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {trainer.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => markPresent(trainer)}
                  className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                >
                  <Check size={16} className="text-green-600 dark:text-green-400" />
                </button>
                <button
                  onClick={() => handleEditClick(trainer)}
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Edit size={16} className="text-blue-600 dark:text-blue-400" />
                </button>
                <button
                  onClick={() => deleteTrainer(trainer.id)}
                  className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  <Trash size={16} className="text-red-600 dark:text-red-400" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-all">
                  {trainer.email}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {trainer.phone}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet Table View - Simplified for medium screens */}
      <div className="hidden md:block lg:hidden overflow-x-auto w-full bg-white dark:bg-gray-800 rounded-lg">
        <style jsx>{`
          .dark table,
          .dark tbody,
          .dark thead,
          .dark tr:not(:hover),
          .dark td,
          .dark th {
            background-color: rgb(31 41 55) !important;
          }
          .dark thead tr,
          .dark thead th {
            background-color: rgb(55 65 81) !important;
          }
          .dark tr:hover td {
            background-color: rgb(55 65 81) !important;
          }
        `}</style>
        <Table className="min-w-full text-sm">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-700">
              <TableHead className="text-black dark:text-white font-semibold">Name</TableHead>
              <TableHead className="text-black dark:text-white font-semibold">Contact</TableHead>
              <TableHead className="text-black dark:text-white text-center font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {trainers.map((trainer) => (
              <TableRow
                key={trainer.id}
                className="hover:bg-blue-50 dark:hover:bg-gray-700 transition bg-white dark:bg-gray-800"
              >
                <TableCell className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">
                  {trainer.name}
                </TableCell>
                <TableCell className="text-xs text-gray-900 dark:text-gray-100">
                  <div className="space-y-1">
                    <div className="break-all">{trainer.email}</div>
                    <div className="text-gray-500 dark:text-gray-400">{trainer.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => markPresent(trainer)}
                      className="p-1.5 hover:bg-green-100 dark:hover:bg-green-900/30 rounded transition-colors"
                    >
                      <Check size={16} className="text-green-600 dark:text-green-400" />
                    </button>
                    <button
                      onClick={() => handleEditClick(trainer)}
                      className="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors"
                    >
                      <Edit size={16} className="text-blue-600 dark:text-blue-400" />
                    </button>
                    <button
                      onClick={() => deleteTrainer(trainer.id)}
                      className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
                    >
                      <Trash size={16} className="text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {trainers.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <User size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">No trainers found</p>
          <p className="text-sm">Add some trainers to get started</p>
        </div>
      )}

      <EditTrainer
        trainer={editingTrainer}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
      />
    </div>
  );
}

export default TrainerList;