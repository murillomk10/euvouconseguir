// routes/agendamentos.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");

// Middleware para autenticar token
function autenticarToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
}

// POST /api/agendamentos — cria um novo agendamento
router.post("/", autenticarToken, async (req, res) => {
  try {
    const { respostas, data_doacao, hora_doacao, local } = req.body;

    // Verifica se todos os campos estão presentes
    if (!respostas || !data_doacao || !hora_doacao || !local) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    // Salva no banco
    await db.execute(
      `INSERT INTO agendamentos 
        (usuario_id, respostas, data_doacao, hora_doacao, local) 
       VALUES (?, ?, ?, ?, ?)`,
      [req.user.id, JSON.stringify(respostas), data_doacao, hora_doacao, local]
    );

    res.status(201).json({ message: "Agendamento enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar agendamento:", error);
    res.status(500).json({ message: "Erro ao salvar agendamento no servidor." });
  }
});

// GET /api/agendamentos — admin visualiza todos
router.get("/", autenticarToken, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Acesso negado." });
    }

    const [rows] = await db.execute(`
      SELECT a.*, u.name, u.email
      FROM agendamentos a
      JOIN users u ON u.id = a.usuario_id
      ORDER BY a.data_criacao DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar agendamentos." });
  }
});

// PATCH /api/agendamentos/:id/status — admin aprova/rejeita
router.patch("/:id/status", autenticarToken, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Acesso negado." });
    }

    const { status } = req.body;
    const { id } = req.params;

    if (!["pendente", "aprovado", "rejeitado"].includes(status)) {
      return res.status(400).json({ message: "Status inválido." });
    }

    await db.execute("UPDATE agendamentos SET status = ? WHERE id = ?", [
      status,
      id,
    ]);

    res.json({ message: "Status atualizado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar status." });
  }
});

module.exports = router;
