import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const { MONGO_DB: DB, MONGO_PASSWORD: PASS, MONGO_USER: USER, PORT } = process.env;
const port: string | number = PORT || 4000;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(todoRoutes);

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASS}@sandbox.4zljp.mongodb.net/${DB}?retryWrites=true&w=majority`,
    {}
  )
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    )
  )
  .catch((error) => {
    throw error;
  });
