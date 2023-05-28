"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/items", (req, res) => {
    const todos = ["Úloha 1", "Úloha 2", "Úloha 3"];
    res.json(todos);
});
app.post("/createItem", (req, res) => {
    const { todo } = req.body;
});
app.post("/deleteItem", (req, res) => {
    const { todo } = req.body;
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
