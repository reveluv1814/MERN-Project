import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks(); //importa el contexto

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams(); //:id
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true} //para reainicializar el form para el edit
        //onsubmit es cuando el form se envia
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values); //actualiza
          } else {
            await createTask(values); //crea
          }
          navigate("/"); //redireciona
          //actions.resetForm(); //resetea el form
          //otra forma de resetear el form
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-200 max-w-sm rounded-md p-4 mx-auto mt-48"
          >
            <h1 className="text-2xl font-bold uppercase text-center">{params.id ? "Edit Task" : "New Task"}</h1>

            <label className="block text-xl my-2">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="px-5 py-1 rounded-sm w-full my-2"
              onChange={handleChange}
              value={values.title} //handleChannge resetea el valor con el valor de values (initial values arriba)
            />

            <label className="block text-xl my-2">Description:</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              className="px-5 py-1 rounded-sm w-full my-2"
              onChange={handleChange}
              value={values.description} //resetea el valor con el valor de values (initial values arriba)
            ></textarea>

            {
              //el isSubmiting es un bool que es mientras esta llenando el form se desactiva
              //abajo dentro de un if pregunta y devuelve un texto y desactiva el boton dependiendo el estado
            }
            <button
              type="submit"
              disabled={isSubmitting}
              /*onClick={
                () => (window.location.href = "/")
              }*/
              className="block bg-indigo-500 px-1 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
