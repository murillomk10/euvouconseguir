import con from "./conection.js";

// Cadastrar usuário
export async function cadastrarUsuario(usuario) {
    const comando = `
        INSERT INTO tb_users 
        (nome, email, senha, cpf, rg, telefone, data_nascimento, nm_mae, endereco, sexo, tp_sanguineo)
        VALUES (?, ?, MD5(?), ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [resposta] = await con.query(comando, [
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.cpf,
        usuario.rg,
        usuario.telefone,
        usuario.data_nascimento,
        usuario.nm_mae,
        usuario.endereco,
        usuario.sexo,
        usuario.tp_sanguineo
    ]);

    usuario.id = resposta.insertId;
    return usuario;
}

// Autenticar usuário (login)
export async function autenticarUsuario(email, senha) {
    // Verificar se é admin hardcoded (para compatibilidade)
    const isAdminHardcoded = email === "adm@gmail.com" && senha === "adm";
    
    if (isAdminHardcoded) {
        return {
            id: 0,
            nome: "Administrador",
            email: "adm@gmail.com",
            isAdmin: true
        };
    }

    // Buscar usuário no banco (incluindo verificação de is_admin)
    const comando = `
        SELECT id, nome, email, COALESCE(is_admin, FALSE) as isAdmin
        FROM tb_users
        WHERE email = ? AND senha = MD5(?)
    `;

    const [linhas] = await con.query(comando, [email, senha]);
    if (linhas[0]) {
        // Converter isAdmin para boolean
        linhas[0].isAdmin = Boolean(linhas[0].isAdmin);
    }
    return linhas[0];
}

export async function listarUsuarios() {
    const comando = `
        SELECT id, nome, email, cpf, rg, telefone, data_nascimento, nm_mae, endereco, sexo, tp_sanguineo
        FROM tb_users
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}

// Buscar dados completos do usuário por ID
export async function buscarUsuarioPorId(id) {
    const comando = `
        SELECT id, nome, email, cpf, rg, telefone, data_nascimento, nm_mae, endereco, sexo, tp_sanguineo
        FROM tb_users
        WHERE id = ?
    `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}
