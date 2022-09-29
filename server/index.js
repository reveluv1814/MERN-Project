import express from "express";
import cors from "cors";//api comunicacion frontend

import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

//middelwares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);//api comunicacion frontend

app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);
//

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
