// controllers/appointmentController.js
const db = require("../db");

// Criar agendamento
exports.createAppointment = (req, res) => {
  const { date, time } = req.body;
  const userId = req.user.id;

  if (!date || !time) {
    return res.status(400).json({ message: "Data e hora são obrigatórias" });
  }

  const sql = "INSERT INTO appointments (user_id, date, time, status) VALUES (?, ?, ?, 'pending')";
  db.query(sql, [userId, date, time], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Agendamento criado com sucesso!" });
  });
};

// Ver agendamentos do usuário logado
exports.getMyAppointments = (req, res) => {
  const userId = req.user.id;
  const sql = "SELECT * FROM appointments WHERE user_id = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Listar agendamentos pendentes (admin)
exports.getPendingAppointments = (req, res) => {
  const sql = "SELECT a.*, u.name, u.email FROM appointments a JOIN users u ON a.user_id = u.id WHERE a.status = 'pending'";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Aprovar ou negar agendamento (admin)
exports.decideAppointment = (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  if (!["approve", "deny"].includes(action)) {
    return res.status(400).json({ message: "Ação inválida" });
  }

  const status = action === "approve" ? "approved" : "denied";
  const sql = "UPDATE appointments SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: `Agendamento ${status} com sucesso!` });
  });
};
