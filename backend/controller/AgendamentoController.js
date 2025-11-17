import { Router } from "express";
import { inserirAgendamento, listarAgendamentos, atualizarStatusAgendamento, listarAgendamentosPorUsuario } from "../repository/AgendamentoRepository.js";

const server = Router();

server.post("/agendamento", async (req, resp) => {
    try {
        const ag = req.body;

        if (!ag.id_user) {
            return resp.status(400).send({ erro: "ID do usuário é obrigatório" });
        }

        const id = await inserirAgendamento(ag);

        resp.status(201).send({
            mensagem: "Agendamento registrado com sucesso!",
            id: id
        });
    } catch (err) {
        console.log(err);
        resp.status(500).send({ erro: "Erro ao registrar agendamento." });
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

// Endpoint para autorizar agendamento (apenas admin)
server.put("/agendamento/:id/autorizar", async (req, resp) => {
    try {
        const { id } = req.params;
        
        const sucesso = await atualizarStatusAgendamento(id, "autorizado");
        
        if (!sucesso) {
            return resp.status(404).send({ erro: "Agendamento não encontrado." });
        }

        resp.send({ mensagem: "Agendamento autorizado com sucesso!" });
    } catch (err) {
        console.log(err);
        resp.status(500).send({ erro: "Erro ao autorizar agendamento." });
    }
});

// Endpoint para negar agendamento (apenas admin)
server.put("/agendamento/:id/negar", async (req, resp) => {
    try {
        const { id } = req.params;
        
        const sucesso = await atualizarStatusAgendamento(id, "negado");
        
        if (!sucesso) {
            return resp.status(404).send({ erro: "Agendamento não encontrado." });
        }

        resp.send({ mensagem: "Agendamento negado com sucesso!" });
    } catch (err) {
        console.log(err);
        resp.status(500).send({ erro: "Erro ao negar agendamento." });
    }
});

// Buscar agendamentos de um usuário específico
server.get("/agendamento/usuario/:idUser", async (req, resp) => {
    try {
        const { idUser } = req.params;
        const agendamentos = await listarAgendamentosPorUsuario(idUser);
        resp.send(agendamentos);
    } catch (err) {
        console.log(err);
        resp.status(500).send({ erro: "Erro ao carregar agendamentos do usuário." });
    }
});

export default server;
