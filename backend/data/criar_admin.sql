-- Script para adicionar campo is_admin na tabela (se ainda não existir)
-- Execute este script no seu banco de dados MySQL

USE TCCGUIADOSANGUE1;

-- Adicionar coluna is_admin se não existir
ALTER TABLE tb_users 
ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- Criar conta admin
-- Email: admin@guia.com
-- Senha: admin123
INSERT INTO tb_users (nome, email, senha, is_admin) 
VALUES ('Administrador', 'admin@guia.com', MD5('admin123'), TRUE)
ON DUPLICATE KEY UPDATE is_admin = TRUE;

-- Ou criar outro admin com email diferente
-- INSERT INTO tb_users (nome, email, senha, is_admin) 
-- VALUES ('Admin Sistema', 'adm@gmail.com', MD5('adm'), TRUE)
-- ON DUPLICATE KEY UPDATE is_admin = TRUE;

-- Verificar se foi criado
SELECT id, nome, email, is_admin FROM tb_users WHERE is_admin = TRUE;

