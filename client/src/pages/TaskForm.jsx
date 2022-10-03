import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";

function TaskForm() {
  const { createTask } = useTasks();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values);
          actions.resetForm(); //resetea el form
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title} //handleChannge resetea el valor con el valor de values (initial values arriba)
            />

            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
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
              onClick={() =>window.location.href = "/"
              }
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
