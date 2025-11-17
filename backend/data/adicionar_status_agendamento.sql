-- Script para adicionar campo status_agendamento na tabela
-- Execute este script no seu banco de dados MySQL

USE TCCGUIADOSANGUE1;

-- Adicionar coluna status_agendamento
-- Valores possíveis: 'pendente', 'autorizado', 'negado'
-- Padrão: 'pendente' (para agendamentos novos)
ALTER TABLE tb_agendamento 
ADD COLUMN status_agendamento VARCHAR(20) DEFAULT 'pendente';

-- Atualizar agendamentos existentes para 'pendente' se estiverem NULL
UPDATE tb_agendamento 
SET status_agendamento = 'pendente' 
WHERE status_agendamento IS NULL;

-- Verificar se foi adicionado
DESCRIBE tb_agendamento;

