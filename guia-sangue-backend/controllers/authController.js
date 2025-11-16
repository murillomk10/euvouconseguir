const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail, findUserById } = require('../models/userModel');
const dotenv = require('dotenv');
dotenv.config();

async function register(req, res) {
  try {
    const {
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
    } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });

    const existing = await findUserByEmail(email);
    if (existing) return res.status(400).json({ error: 'E-mail já cadastrado' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await createUser(
      name,
      email,
      hashed,
      role || 'donor',
      cpf,
      rg,
      telefone,
      nascimento,
      mae,
      endereco,
      sexo,
      tipo_sanguineo
    );

    res.status(201).json({ message: 'Usuário criado', user });
  } catch (err) {
    console.error('Erro no register:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Senha incorreta' });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({  
      message: 'Login bem-sucedido',
      token,
      user: { id: user.id, name: user.name, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
}

async function me(req, res) {
  const user = await findUserById(req.user.id);
  res.json({ user });
}

module.exports = { register, login, me };
