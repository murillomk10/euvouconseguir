import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import api from "../api";
import Cabecalho from "../components/cabecalho";
import "./Admin.scss";
import Cabecalho2 from "../components/Cabecalho2";

export default function Admin() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        // Verificar se é admin
        const isAdmin = localStorage.getItem("isAdmin") === "true";
        
        // Debug: verificar valores no console
        console.log("isAdmin no localStorage:", localStorage.getItem("isAdmin"));
        console.log("isAdmin convertido:", isAdmin);
        
        if (!isAdmin) {
            alert("Acesso negado. Apenas administradores podem acessar esta página.");
            navigate("/home");
            return;
        }

        carregarUsuarios();
        carregarAgendamentos();
    }, [navigate]);

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

    const autorizarAgendamento = async (id) => {
        try {
            const resp = await api.put(`/agendamento/${id}/autorizar`);
            alert(resp.data.mensagem || "Agendamento autorizado com sucesso!");
            carregarAgendamentos(); // Recarregar lista
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.erro || "Erro ao autorizar agendamento.");
        }
    };

    const negarAgendamento = async (id) => {
        if (!confirm("Tem certeza que deseja negar este agendamento?")) {
            return;
        }

        try {
            const resp = await api.put(`/agendamento/${id}/negar`);
            alert(resp.data.mensagem || "Agendamento negado com sucesso!");
            carregarAgendamentos(); // Recarregar lista
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.erro || "Erro ao negar agendamento.");
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "autorizado":
                return "#4CAF50"; // Verde
            case "negado":
                return "#f44336"; // Vermelho
            case "pendente":
            default:
                return "#ff9800"; // Laranja
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "autorizado":
                return "Autorizado";
            case "negado":
                return "Negado";
            case "pendente":
            default:
                return "Pendente";
        }
    };

    return (
        <div className="admin-page">
            <Cabecalho2 />

            <main className="conteudo-admin">


                <h2 className="titulo-secao">Usuários Cadastrados:</h2>

                <div className="card-box">
                    <div className="card-top-info">
                        {usuarios.length > 0 ? (
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "2px solid #ccc" }}>
                                        <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
                                        <th style={{ padding: "10px", textAlign: "left" }}>Nome</th>
                                        <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
                                        <th style={{ padding: "10px", textAlign: "left" }}>CPF</th>
                                        <th style={{ padding: "10px", textAlign: "left" }}>Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((u) => (
                                        <tr key={u.id} style={{ borderBottom: "1px solid #eee" }}>
                                            <td style={{ padding: "10px" }}>{u.id}</td>
                                            <td style={{ padding: "10px" }}>{u.nome}</td>
                                            <td style={{ padding: "10px" }}>{u.email}</td>
                                            <td style={{ padding: "10px" }}>{u.cpf || "-"}</td>
                                            <td style={{ padding: "10px" }}>{u.telefone || "-"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Nenhum usuário cadastrado encontrado.</p>
                        )}
                    </div>

                    <div className="card-space"></div>
                </div>

                <h2 className="titulo-secao">Agendamentos:</h2>

                <div className="card-box">
                    <div className="card-top-info">
                        {agendamentos.length > 0 ? (
                            agendamentos.map((a) => (
                                <div key={a.id} className="linha-agendamento" style={{ 
                                    border: "1px solid #ddd", 
                                    padding: "15px", 
                                    marginBottom: "10px",
                                    borderRadius: "5px"
                                }}>
                                    <div style={{ marginBottom: "10px" }}>
                                        <p><strong>Usuário:</strong> {a.nome_usuario} ({a.email_usuario})</p>
                                        <p><strong>Data/Hora da Doação:</strong> {new Date(a.dt_doacao).toLocaleString('pt-BR')}</p>
                                        <p><strong>Local:</strong> {a.local_doacao}</p>
                                        <p><strong>ID do Agendamento:</strong> {a.id}</p>
                                        <p>
                                            <strong>Status:</strong>{" "}
                                            <span style={{
                                                color: getStatusColor(a.status_agendamento),
                                                fontWeight: "bold",
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                backgroundColor: getStatusColor(a.status_agendamento) + "20"
                                            }}>
                                                {getStatusText(a.status_agendamento)}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="botoes-acoes" style={{ marginTop: "10px" }}>
                                        <button 
                                            className="btn-autorizar" 
                                            onClick={() => autorizarAgendamento(a.id)}
                                            disabled={a.status_agendamento === "autorizado"}
                                            style={{ 
                                                padding: "8px 15px", 
                                                marginRight: "10px",
                                                backgroundColor: a.status_agendamento === "autorizado" ? "#ccc" : "#4CAF50",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: a.status_agendamento === "autorizado" ? "not-allowed" : "pointer",
                                                opacity: a.status_agendamento === "autorizado" ? 0.6 : 1
                                            }}
                                        >
                                            {a.status_agendamento === "autorizado" ? "✓ Autorizado" : "Autorizar"}
                                        </button>
                                        <button 
                                            className="btn-negado"
                                            onClick={() => negarAgendamento(a.id)}
                                            disabled={a.status_agendamento === "negado"}
                                            style={{ 
                                                padding: "8px 15px",
                                                backgroundColor: a.status_agendamento === "negado" ? "#ccc" : "#f44336",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: a.status_agendamento === "negado" ? "not-allowed" : "pointer",
                                                opacity: a.status_agendamento === "negado" ? 0.6 : 1
                                            }}
                                        >
                                            {a.status_agendamento === "negado" ? "✗ Negado" : "Não autorizar"}
                                        </button>
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
                    <Link to="/home" className="volta">Voltar para Home</Link>
                </div>
            </main>
        </div>
    );
}
