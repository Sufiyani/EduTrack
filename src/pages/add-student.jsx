import AddStudent from "../components/add-student";
import StudentList from "../components/student-list";
import Dashboard from "../components/layout/dashboard";

export default function AddStudentComp() {
  return (
    <>
      <Dashboard>
        {/* <div className="flex justify-end items-center p-2">
          <AddStudent />
        </div>
        <div className="p-2">
          <StudentList />
        </div> */}
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
  <div className="flex justify-end items-center mb-4">
    <AddStudent />
  </div>
  <div className="bg-white/90 shadow-xl rounded-lg p-4">
    <StudentList />
  </div>
</div>

      </Dashboard>
    </>
  );
}