import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/items", (req: Request, res: Response) => {
  const todos = ["Úloha 1", "Úloha 2", "Úloha 3"];

  res.json(todos);
});

app.post("/createItem", (req: Request, res: Response) => {
  const { todo } = req.body;
});

app.post("/deleteItem", (req: Request, res: Response) => {
  const { todo } = req.body;
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
