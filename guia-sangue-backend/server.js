const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const db = require('./db');

const cors = require('cors');
app.use(cors());
    
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const agendamentoRoutes = require("./routes/agendamentos");
app.use("/api/agendamentos", agendamentoRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => res.send('API Guia do Sangue rodando!'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  try {
    await db.execute('SELECT 1');
    console.log('✅ Conectado ao MySQL');
  } catch (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
  }
});
