import { useEffect } from "react";
import TaskCard from "../components/TasksCard";

//importo desde el contexto el use state para usarlo
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  //traemos desde el context la variable task y el loadtask
  const { tasks, loadTasks } = useTasks();

  //useEffect crea una funcion que se ejecuta al ingresar a la pagina
  useEffect(() => {
    loadTasks();
  }, []);

  //funcion para mostrar o listar las tareas
  function renderMain() {
    if (tasks.length == 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center py-10">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
        {
          //se ejecuta la funcion de listar tareas
          renderMain()
        }
      </div>
    </div>
  );
}

export default TasksPage;
