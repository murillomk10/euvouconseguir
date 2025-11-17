import connection from "./connection.js";

export async function inserirAgendamento(ag) {
    const comando = `
        INSERT INTO tb_agendamento (
            pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6,
            pergunta7, pergunta8, pergunta9, pergunta10, pergunta11,
            pergunta12, pergunta13, dt_doacao, local_doacao
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
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
        SELECT *
        FROM tb_agendamento
        ORDER BY id DESC
    `;

    const [registros] = await connection.query(comando);
    return registros;
}
