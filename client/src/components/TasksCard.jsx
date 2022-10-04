//importamos el contexto
import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TasksCard({ task }) {
  //importamos la funcion para eliminar
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-600 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-3xl font-bold">{task.title}</h2>
        <span className="text-xl">{task.done == 1 ? "✔️" : "❌"}</span>
      </header>

      <p className="text-xl">{task.description}</p>
      <span className="text-xs">{task.createAt}</span>
      <div className="flex gap-x-2 py-3">
        <button
          className="bg-rose-500 px-2 py-1 text-white  rounded-lg"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-400 px-2 py-1 text-white  rounded-lg"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white  rounded-lg"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TasksCard;
