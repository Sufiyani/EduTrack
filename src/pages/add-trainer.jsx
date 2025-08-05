import TrainerList from "../components/trainer-list";
import Dashboard from "../components/layout/dashboard";
import AddTrainer from "../components/add-trainer";

export default function AddTrainerComp() {
  return (
    <>
      <Dashboard>
        <div className="flex justify-end items-center p-2">
          <AddTrainer />
        </div>
        <div className="p-2">
          <TrainerList />
        </div>
      </Dashboard>
    </>
  );
}