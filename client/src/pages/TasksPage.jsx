import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TasksCard";

function TasksPage() {
  //usestate crea una variable
  const [tasks, setTask] = useState([]);

  //useEffect crea una funcion que se ejecuta al ingresar a la pagina
  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTask(response.data); //la variable del useState tiene este valor
    }

    loadTasks();
  }, []);

  //funcion para mostrar o listar las tareas
  function renderMain() {
    if (tasks.length == 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {
        //se ejecuta la funcion de listar tareas
        renderMain()
      }
    </div>
  );
}

export default TasksPage;
