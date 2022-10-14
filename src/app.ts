import express from "express";
import todoRoutes from "./routes/todoes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(3000);
