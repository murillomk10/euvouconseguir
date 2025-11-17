CREATE DATABASE TCCGUIADOSANGUE1;
USE TCCGUIADOSANGUE1;


CREATE TABLE tb_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(222),
    email VARCHAR(222) UNIQUE,
    senha VARCHAR(222),
    cpf VARCHAR(20),
    rg VARCHAR(20),
    telefone VARCHAR(20),
    data_nascimento DATE,
    nm_mae VARCHAR(222),
    endereco VARCHAR(222),
    sexo VARCHAR(50),
    tp_sanguineo VARCHAR(10)
);


CREATE TABLE tb_agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT
    NOT NULL,

    pergunta1 BOOLEAN,
    pergunta2 BOOLEAN,
    pergunta3 BOOLEAN,
    pergunta4 BOOLEAN,
    pergunta5 BOOLEAN,
    pergunta6 BOOLEAN,
    pergunta7 BOOLEAN,
    pergunta8 BOOLEAN,
    pergunta9 BOOLEAN,
    pergunta10 BOOLEAN,
    pergunta11 BOOLEAN,
    pergunta12 BOOLEAN,
    pergunta13 BOOLEAN,

    dt_doacao DATETIME,
    local_doacao VARCHAR(222),

    CONSTRAINT fk_agendamento_user
        FOREIGN KEY (id_user)
        REFERENCES tb_users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
CREATE DATABASE TCCGUIADOSANGUE1;
USE TCCGUIADOSANGUE1;


CREATE TABLE tb_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(222),
    email VARCHAR(222) UNIQUE,
    senha VARCHAR(222),
    cpf VARCHAR(20),
    rg VARCHAR(20),
    telefone VARCHAR(20),
    data_nascimento DATE,
    nm_mae VARCHAR(222),
    endereco VARCHAR(222),
    sexo VARCHAR(50),
    tp_sanguineo VARCHAR(10)
);


CREATE TABLE tb_agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT
    NOT NULL,

    pergunta1 BOOLEAN,
    pergunta2 BOOLEAN,
    pergunta3 BOOLEAN,
    pergunta4 BOOLEAN,
    pergunta5 BOOLEAN,
    pergunta6 BOOLEAN,
    pergunta7 BOOLEAN,
    pergunta8 BOOLEAN,
    pergunta9 BOOLEAN,
    pergunta10 BOOLEAN,
    pergunta11 BOOLEAN,
    pergunta12 BOOLEAN,
    pergunta13 BOOLEAN,

    dt_doacao DATETIME,
    local_doacao VARCHAR(222),

    CONSTRAINT fk_agendamento_user
        FOREIGN KEY (id_user)
        REFERENCES tb_users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
