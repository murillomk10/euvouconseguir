import { useState, useEffect } from "react";
import { Link } from "react-router";
import api from "../api";
import Cabecalho from "../components/cabecalho";
import "./Admin.scss";
import Cabecalho2 from "../components/Cabecalho2";

export default function Admin() {
    const [usuarios, setUsuarios] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        carregarUsuarios();
        carregarAgendamentos();
    }, []);

    const carregarUsuarios = async () => {
        try {
            const resp = await api.get("/usuario");
            setUsuarios(resp.data);
        } catch {
            alert("Erro ao carregar usuários.");
        }
    };

    const carregarAgendamentos = async () => {
        try {
            const resp = await api.get("/agendamento");
            setAgendamentos(resp.data);
        } catch {
            alert("Erro ao carregar agendamentos.");
        }
    };

    return (
        <div className="admin-page">
            <Cabecalho2 />

            <main className="conteudo-admin">


                <h2 className="titulo-secao">Registros de Cadastros:</h2>

                <div className="card-box">
                    <div className="card-top-info">
                        {usuarios.length > 0 ? (
                            usuarios.map((u) => (
                                <p key={u.id_usuario}>
                                    {u.nome_usuario} se cadastrou na data:{" "}
                                    {u.data_agendamento}
                                </p>
                            ))
                        ) : (
                            <p>Nenhum cadastro encontrado.</p>
                        )}
                    </div>

                    <div className="card-space"></div>
                </div>

                <h2 className="titulo-secao">Registros de Agendamentos:</h2>

                <div className="card-box">
                    <div className="card-top-info">
                        {agendamentos.length > 0 ? (
                            agendamentos.map((a) => (
                                <div key={a.id_agendamento} className="linha-agendamento">
                                    <p>
                                        {a.nome_usuario} fez um agendamento na data:{" "}
                                        {a.data_agendamento}
                                    </p>

                                    <div className="botoes-acoes">
                                        <button className="btn-autorizar">Autorizar</button>
                                        <button className="btn-negado">Não autorizar</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum agendamento encontrado.</p>
                        )}
                    </div>

                    <div className="card-space"></div>
                </div>

                <div className="area-voltar">
                    <Link to="/" className="volta">Voltar</Link>
                </div>
            </main>
        </div>
    );
}
