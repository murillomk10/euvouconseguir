# 🧪 Guia de Teste - Conta Admin

## 📋 Opção 1: Usar conta admin já configurada (Mais Rápido)

### Credenciais de Login:
- **Email:** `adm@gmail.com`
- **Senha:** `adm`

### Como testar:
1. Acesse a página de login: `http://localhost:5173/login` (ou a porta do seu frontend)
2. Digite o email: `adm@gmail.com`
3. Digite a senha: `adm`
4. Clique em "Entrar"
5. Você será redirecionado automaticamente para `/admin`

---

## 📋 Opção 2: Criar conta admin no banco de dados (Recomendado)

### Passo 1: Adicionar campo is_admin no banco

Execute este SQL no seu MySQL:

```sql
USE TCCGUIADOSANGUE1;

-- Adicionar coluna is_admin
ALTER TABLE tb_users 
ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
```

### Passo 2: Criar conta admin

Execute este SQL para criar um admin:

```sql
-- Opção A: Criar novo admin
INSERT INTO tb_users (nome, email, senha, is_admin) 
VALUES ('Administrador', 'admin@guia.com', MD5('admin123'), TRUE);

-- Opção B: Tornar um usuário existente admin
UPDATE tb_users 
SET is_admin = TRUE 
WHERE email = 'seu_email@exemplo.com';
```

### Passo 3: Testar login

1. Acesse a página de login
2. Use as credenciais criadas:
   - **Email:** `admin@guia.com`
   - **Senha:** `admin123`
3. Você será redirecionado para `/admin`

---

## 🧪 Checklist de Testes

### ✅ Teste 1: Login como Admin
- [ ] Fazer login com credenciais de admin
- [ ] Verificar redirecionamento para `/admin`
- [ ] Verificar se `isAdmin` está salvo no localStorage

### ✅ Teste 2: Botão Admin no Cabeçalho
- [ ] Verificar se o botão "Admin" aparece no menu de navegação
- [ ] Verificar se o botão "Admin" aparece ao lado do nome do usuário
- [ ] Clicar no botão e verificar se redireciona para `/admin`

### ✅ Teste 3: Proteção de Rota
- [ ] Fazer logout
- [ ] Tentar acessar `/admin` diretamente pela URL
- [ ] Verificar se aparece mensagem de "Acesso negado"
- [ ] Verificar se é redirecionado para `/home`

### ✅ Teste 4: Visualização de Dados
- [ ] Fazer login como admin
- [ ] Verificar se a lista de usuários é exibida corretamente
- [ ] Verificar se a lista de agendamentos é exibida corretamente
- [ ] Verificar se os dados estão formatados corretamente

### ✅ Teste 5: Login como Usuário Comum
- [ ] Criar uma conta de usuário comum (não admin)
- [ ] Fazer login com essa conta
- [ ] Verificar se NÃO aparece o botão "Admin"
- [ ] Verificar se é redirecionado para `/home` (não `/admin`)
- [ ] Tentar acessar `/admin` diretamente e verificar bloqueio

---

## 🔧 Solução de Problemas

### Problema: "Acesso negado" mesmo sendo admin
**Solução:**
1. Verifique se `isAdmin` está salvo no localStorage:
   ```javascript
   console.log(localStorage.getItem("isAdmin")); // Deve retornar "true"
   ```
2. Limpe o localStorage e faça login novamente
3. Verifique se o campo `is_admin` está TRUE no banco de dados

### Problema: Botão Admin não aparece
**Solução:**
1. Verifique se está logado como admin
2. Recarregue a página (F5)
3. Verifique o console do navegador para erros

### Problema: Erro ao criar admin no banco
**Solução:**
1. Verifique se a coluna `is_admin` foi criada:
   ```sql
   DESCRIBE tb_users;
   ```
2. Se não existir, execute:
   ```sql
   ALTER TABLE tb_users ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
   ```

---

## 📝 Notas Importantes

- A conta `adm@gmail.com` / `adm` funciona sem precisar estar no banco (hardcoded)
- Para produção, recomenda-se usar apenas contas do banco com `is_admin = TRUE`
- O campo `is_admin` é opcional - se não existir, o sistema usa a verificação hardcoded
- Sempre limpe o localStorage ao testar diferentes contas

---

## 🚀 Próximos Passos

Após testar, você pode:
1. Implementar funcionalidade dos botões "Autorizar" e "Não autorizar"
2. Adicionar filtros e busca na página de admin
3. Adicionar mais campos de informação na visualização
4. Implementar edição/exclusão de usuários e agendamentos

