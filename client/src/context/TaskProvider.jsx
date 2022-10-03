//importa api
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
} from "../api/tasks.api";
//este es contexto
import { useContext, useState } from "react";
//importamos el use context para usar el contexto
//crea un componente que tendra dentro de el más componentes

//importamos el usecontext
import { TaskContext } from "./TaskContext";

// creamos un hook para usar el contexto y lo exportamos
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

//********PROVIDER****** */
//el provider agrupa los componentes
export const TaskContextProvider = ({ children }) => {
  //**********FUNCIONES O VARIABLES GLOBALES************* */

  //usestate crea una variable
  const [tasks, setTasks] = useState([]);

  // funcion para usarlo en un useefect en taskpage . esta funcion hace la peticion al sevidor
  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data); //la variable del useState tiene este valor
  }

  //funcion para eliminar tareas dentro de taskcard
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      //crea un nueva arreglo segun el arreglo de arriba el useState
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //

  //funcion para crear tareas que se usara en task form
  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      setTasks([...tasks, response.data])
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //****PROVIDER QUE SE ENVIA********* */
  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
  //devuleve en componente que va estar basado en task context
  //provider y adentro los multiples componentes hijos
  //en value se pasan cualquien valor que los hijos puedan acceder
};
