const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getMyAppointments,
  getPendingAppointments,
  decideAppointment,
} = require('../controllers/appointmentController');
const { authRequired, adminOnly } = require('../middleware/authMiddleware');

// Rota para criar agendamento
router.post('/', authRequired, createAppointment);

// Ver agendamentos do usuário logado
router.get('/me', authRequired, getMyAppointments);

// Ver agendamentos pendentes (admin)
router.get('/pending', authRequired, adminOnly, getPendingAppointments);

// Aprovar ou negar agendamento (admin)
router.post('/:id/decide', authRequired, adminOnly, decideAppointment);

module.exports = router;
