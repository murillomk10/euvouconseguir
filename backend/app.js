import express from "express";
import loginController from "./controller/LoginController.js";
import agendamentoController from "./controller/AgendamentoController.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// REGISTRAR ROTAS
app.use(loginController);
app.use(agendamentoController);

app.listen(5000, () => console.log("API rodando na porta 5000"));
