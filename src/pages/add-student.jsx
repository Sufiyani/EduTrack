import AddStudent from "../components/add-student";
import StudentList from "../components/student-list";
import Dashboard from "../components/layout/dashboard";

export default function AddStudentComp() {
  return (
    <>
      <Dashboard>
        <div className="flex justify-end items-center p-2">
          <AddStudent />
        </div>
        <div className="p-2">
          <StudentList />
        </div>
      </Dashboard>
    </>
  );
}