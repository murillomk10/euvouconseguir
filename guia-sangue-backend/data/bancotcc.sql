CREATE DATABASE IF NOT EXISTS guia_sangue;
USE guia_sangue;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('donor','admin') DEFAULT 'donor',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  scheduled_at DATETIME NOT NULL,
  status ENUM('pending','approved','denied') DEFAULT 'pending',
  note VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

SHOW TABLES;
DESCRIBE users;

select * from users;

ALTER TABLE users
ADD COLUMN cpf VARCHAR(20),
ADD COLUMN rg VARCHAR(20),
ADD COLUMN telefone VARCHAR(20),
ADD COLUMN nascimento DATE,
ADD COLUMN mae VARCHAR(100),
ADD COLUMN endereco TEXT,
ADD COLUMN sexo VARCHAR(20),
ADD COLUMN tipo_sanguineo VARCHAR(5);


DROP TABLE IF EXISTS agendamentos;

CREATE TABLE agendamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  respostas JSON NOT NULL,
  status ENUM('pendente', 'aprovado', 'rejeitado') DEFAULT 'pendente',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES users(id) ON DELETE CASCADE
);

ALTER TABLE agendamentos ADD COLUMN data_agendada DATETIME;

ALTER TABLE agendamentos
ADD COLUMN data_doacao DATE,
ADD COLUMN hora_doacao TIME,
ADD COLUMN local VARCHAR(255)
;

SELECT * FROM agendamentos;