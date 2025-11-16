const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function authRequired(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token)
    return res.status(401).json({ error: 'Token inválido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token expirado ou inválido' });
  }
}

function adminOnly(req, res, next) {
  if (req.user.role !== 'admin')
    return res.status(403).json({ error: 'Acesso negado: apenas admin' });
  next();
}

module.exports = { authRequired, adminOnly };
