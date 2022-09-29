import { Route, Routes } from "react-router-dom";
import Taskspage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Taskspage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
