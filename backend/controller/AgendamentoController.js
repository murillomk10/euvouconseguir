import { Router } from "express";
import { inserirAgendamento, listarAgendamentos } from "../repository/AgendamentoRepository.js";

const server = Router();

server.post("/agendamento", async (req, resp) => {
    try {
        const ag = req.body;

        const id = await inserirAgendamento(ag);

        resp.status(201).send({
            mensagem: "Agendamento registrado com sucesso!",
            id: id
        });
    } catch (err) {
        console.log(err);
        resp.status(500).send("Erro ao registrar agendamento.");
    }
});

server.get("/agendamento", async (req, resp) => {
    try {
        const lista = await listarAgendamentos();
        resp.send(lista);
    } catch (err) {
        console.log(err);
        resp.status(500).send("Erro ao carregar agendamentos.");
    }
});

export default server;
