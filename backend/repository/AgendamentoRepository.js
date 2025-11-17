import connection from "./conection.js";

export async function inserirAgendamento(ag) {
    const comando = `
        INSERT INTO tb_agendamento (
            id_user, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6,
            pergunta7, pergunta8, pergunta9, pergunta10, pergunta11,
            pergunta12, pergunta13, dt_doacao, local_doacao
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
        ag.id_user,
        ag.pergunta1, ag.pergunta2, ag.pergunta3, ag.pergunta4, ag.pergunta5,
        ag.pergunta6, ag.pergunta7, ag.pergunta8, ag.pergunta9, ag.pergunta10,
        ag.pergunta11, ag.pergunta12, ag.pergunta13,
        ag.dt_doacao,
        ag.local_doacao
    ];

    const [resp] = await connection.query(comando, params);
    return resp.insertId;
}

export async function listarAgendamentos() {
    const comando = `
        SELECT 
            a.id,
            a.id_user,
            a.pergunta1, a.pergunta2, a.pergunta3, a.pergunta4, a.pergunta5,
            a.pergunta6, a.pergunta7, a.pergunta8, a.pergunta9, a.pergunta10,
            a.pergunta11, a.pergunta12, a.pergunta13,
            a.dt_doacao,
            a.local_doacao,
            COALESCE(a.status_agendamento, 'pendente') as status_agendamento,
            u.nome as nome_usuario,
            u.email as email_usuario
        FROM tb_agendamento a
        INNER JOIN tb_users u ON a.id_user = u.id
        ORDER BY a.id DESC
    `;

    const [registros] = await connection.query(comando);
    return registros;
}

export async function atualizarStatusAgendamento(id, status) {
    const comando = `
        UPDATE tb_agendamento
        SET status_agendamento = ?
        WHERE id = ?
    `;

    const [resp] = await connection.query(comando, [status, id]);
    return resp.affectedRows > 0;
}

// Buscar agendamentos de um usuário específico
export async function listarAgendamentosPorUsuario(idUser) {
    const comando = `
        SELECT 
            a.id,
            a.id_user,
            a.pergunta1, a.pergunta2, a.pergunta3, a.pergunta4, a.pergunta5,
            a.pergunta6, a.pergunta7, a.pergunta8, a.pergunta9, a.pergunta10,
            a.pergunta11, a.pergunta12, a.pergunta13,
            a.dt_doacao,
            a.local_doacao,
            COALESCE(a.status_agendamento, 'pendente') as status_agendamento
        FROM tb_agendamento a
        WHERE a.id_user = ?
        ORDER BY a.id DESC
    `;

    const [registros] = await connection.query(comando, [idUser]);
    return registros;
}
