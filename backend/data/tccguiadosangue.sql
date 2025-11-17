CREATE DATABASE TCCGUIADOSANGUE1;
USE TCCGUIADOSANGUE1;

CREATE TABLE tb_users (id int primary key auto_increment,
nome varchar(222),
email varchar(222),
senha varchar(222),
cpf int,
rg int,
telefone int,
data_nascimento date,
nm_mae varchar (222),
endereco varchar(222),
sexo varchar(222),
tp_sanguineo varchar(222)
);

CREATE TABLE tb_agendamento (id int primary key auto_increment,
pergunta1 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
pergunta2 boolean,
dt_doacao datetime,
local_doacao varchar (222)
);