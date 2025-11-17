import { Router } from "express";
import { cadastrarUsuario, autenticarUsuario, listarUsuarios } from "../repository/LoginRepository.js";

const endpoints = Router();

endpoints.post("/usuario/registrar", async (req, resp) => {
    try {
        const novoUsuario = req.body;

        if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.senha)
            return resp.status(400).send({ erro: "Preencha nome, email e senha" });

        const usuario = await cadastrarUsuario(novoUsuario);
        resp.status(201).send(usuario);

    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao cadastrar usuário" });
    }
});

endpoints.post("/usuario/login", async (req, resp) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha)
            return resp.status(400).send({ erro: "Informe email e senha" });

        const usuario = await autenticarUsuario(email, senha);

        if (!usuario)
            return resp.status(400).send({ erro: "Email ou senha incorretos" });

        resp.send(usuario);

    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro no servidor ao logar" });
    }
});

endpoints.get("/usuario", async (req, resp) => {
    try {
        const lista = await listarUsuarios();
        resp.send(lista);

    } catch (err) {
        console.error(err);
        resp.status(500).send({ erro: "Erro ao listar usuários" });
    }
});

export default endpoints;