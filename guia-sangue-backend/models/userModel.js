const db = require('../db');

async function createUser(
  name,
  email,
  password,
  role,
  cpf,
  rg,
  telefone,
  nascimento,
  mae,
  endereco,
  sexo,
  tipo_sanguineo
) {
  const [result] = await db.execute(
    `INSERT INTO users 
      (name, email, password, role, cpf, rg, telefone, nascimento, mae, endereco, sexo, tipo_sanguineo)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      email,
      password,
      role,
      cpf,
      rg,
      telefone,
      nascimento,
      mae,
      endereco,
      sexo,
      tipo_sanguineo,
    ]
  );
  return { id: result.insertId, name, email, role };
}

async function findUserByEmail(email) {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
}

async function findUserById(id) {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
}

module.exports = { createUser, findUserByEmail, findUserById };
