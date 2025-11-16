const db = require('../db');

async function createAppointment(user_id, scheduled_at, note) {
  const [result] = await db.execute(
    'INSERT INTO appointments (user_id, scheduled_at, note) VALUES (?, ?, ?)',
    [user_id, scheduled_at, note]
  );
  return { id: result.insertId, user_id, scheduled_at, note };
}

async function getAppointmentsByUser(user_id) {
  const [rows] = await db.execute(
    'SELECT * FROM appointments WHERE user_id = ? ORDER BY scheduled_at DESC',
    [user_id]
  );
  return rows;
}

async function getPendingAppointments() {
  const [rows] = await db.execute(`
    SELECT a.*, u.name, u.email 
    FROM appointments a 
    JOIN users u ON a.user_id = u.id 
    WHERE a.status = 'pending' 
    ORDER BY a.scheduled_at
  `);
  return rows;
}

async function updateAppointmentStatus(id, status) {
  const [result] = await db.execute(
    'UPDATE appointments SET status = ? WHERE id = ?',
    [status, id]
  );
  return result.affectedRows > 0;
}

async function findAppointmentById(id) {
  const [rows] = await db.execute('SELECT * FROM appointments WHERE id = ?', [id]);
  return rows[0];
}

module.exports = {
  createAppointment,
  getAppointmentsByUser,
  getPendingAppointments,
  updateAppointmentStatus,
  findAppointmentById
};
