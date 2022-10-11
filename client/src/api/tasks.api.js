import axios from "axios";

const token = await axios.get("http://localhost:4000/token", {
  headers: { rol: "adminn" },
});
//console.log(token);

export const getTasksRequest = async () => {
  return await axios
    .get("http://localhost:4000/tasks", {
      headers: { Authorization: token.data },
    })
    .then((data) => {
      console.log(data.data.auth)
      if (data.data.auth) {
        return data.data.result;
      } else return [];
    })
    .catch(function (error) {
      return false;
    });
};

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, { done });
