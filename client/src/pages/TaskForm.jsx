import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);

            actions.resetForm(); //resetea el form
          } catch (error) {
            console.log(error);
          }
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
              value={values.title} //resetea el valor con el valor de values (initial values arriba)
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
