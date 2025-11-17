import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './PerfilUsuario.scss';
import Cabecalho2 from '../components/Cabecalho2';
import api from '../api';

export default function PerfilUsuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  const carregarDadosUsuario = async () => {
    try {
      const userId = localStorage.getItem("userId");
      
      if (!userId) {
        alert("Você precisa estar logado para acessar o perfil.");
        navigate("/login");
        return;
      }

      // Buscar dados do usuário
      const respUsuario = await api.get(`/usuario/${userId}`);
      setUsuario(respUsuario.data);

      // Buscar agendamentos do usuário
      const respAgendamentos = await api.get(`/agendamento/usuario/${userId}`);
      setAgendamentos(respAgendamentos.data || []);

      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar dados do perfil.");
      setLoading(false);
    }
  };

  const formatarData = (dataString) => {
    if (!dataString) return '-';
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  };

  const formatarDataHora = (dataString) => {
    if (!dataString) return '-';
    const data = new Date(dataString);
    return data.toLocaleString('pt-BR');
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

  const getStatusColor = (status) => {
    switch (status) {
      case "autorizado":
        return "#4CAF50";
      case "negado":
        return "#f44336";
      case "pendente":
      default:
        return "#ff9800";
    }
  };

  if (loading) {
    return (
      <div className="perfil-usuario">
        <Cabecalho2 />
        <div className="perfil-content">
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!usuario) {
    return (
      <div className="perfil-usuario">
        <Cabecalho2 />
        <div className="perfil-content">
          <p>Erro ao carregar dados do usuário.</p>
        </div>
      </div>
    );
  }

  // Separar agendamentos por status
  const agendamentosPendentes = agendamentos.filter(a => a.status_agendamento === 'pendente');
  const agendamentosAutorizados = agendamentos.filter(a => a.status_agendamento === 'autorizado');
  const agendamentosNegados = agendamentos.filter(a => a.status_agendamento === 'negado');

  return (
    <div className="perfil-usuario">
      <Cabecalho2 />
      <div className="perfil-content">
        <div className="user-avatar">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#333" strokeWidth="2"/>
            <circle cx="50" cy="35" r="12" fill="none" stroke="#333" strokeWidth="2"/>
            <path d="M 28 65 Q 28 55 50 55 Q 72 55 72 65" fill="none" stroke="#333" strokeWidth="2"/>
          </svg>
          <p className="user-label">user</p>
        </div>

        <div className="info-section">
          <h2 className="section-title">Sobre Você:</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Nome:</span>
              <span className="info-value">{usuario.nome || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">CPF:</span>
              <span className="info-value">{usuario.cpf || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">RG:</span>
              <span className="info-value">{usuario.rg || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Número de telefone:</span>
              <span className="info-value">{usuario.telefone || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Data de Nascimento:</span>
              <span className="info-value">{formatarData(usuario.data_nascimento)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Nome da Mãe ou Responsável:</span>
              <span className="info-value">{usuario.nm_mae || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Endereço Completo:</span>
              <span className="info-value">{usuario.endereco || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sexo Biológico:</span>
              <span className="info-value">{usuario.sexo || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Tipo Sanguíneo:</span>
              <span className="info-value">{usuario.tp_sanguineo || '-'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">E-mail:</span>
              <span className="info-value">{usuario.email || '-'}</span>
            </div>
          </div>
        </div>

        <div className="agendamentos-section">
          <h2 className="section-title">Seus Agendamentos:</h2>

          {agendamentosPendentes.length > 0 && (
            <div className="agendamento-em-processo">
              <p className="agendamento-status">Agendamentos Pendentes:</p>
              {agendamentosPendentes.map((agendamento) => (
                <div key={agendamento.id} className="agendamento-card">
                  <div className="agendamento-info">
                    <span className="data">{formatarDataHora(agendamento.dt_doacao)}</span>
                    <span className="local">{agendamento.local_doacao}</span>
                    <span style={{ 
                      color: getStatusColor(agendamento.status_agendamento),
                      fontWeight: "bold"
                    }}>
                      {getStatusText(agendamento.status_agendamento)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {agendamentosAutorizados.length > 0 && (
            <div className="agendamentos-realizados">
              <h3 className="agendamentos-titulo">Agendamentos Autorizados:</h3>
              <div className="agendamentos-list">
                {agendamentosAutorizados.map((agendamento) => (
                  <div key={agendamento.id} className="agendamento-item">
                    <span className="data">{formatarDataHora(agendamento.dt_doacao)}</span>
                    <span className="local">{agendamento.local_doacao}</span>
                    <span style={{ color: getStatusColor(agendamento.status_agendamento) }}>
                      {getStatusText(agendamento.status_agendamento)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {agendamentosNegados.length > 0 && (
            <div className="agendamentos-realizados">
              <h3 className="agendamentos-titulo">Agendamentos Negados:</h3>
              <div className="agendamentos-list">
                {agendamentosNegados.map((agendamento) => (
                  <div key={agendamento.id} className="agendamento-item">
                    <span className="data">{formatarDataHora(agendamento.dt_doacao)}</span>
                    <span className="local">{agendamento.local_doacao}</span>
                    <span style={{ color: getStatusColor(agendamento.status_agendamento) }}>
                      {getStatusText(agendamento.status_agendamento)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {agendamentos.length === 0 && (
            <p>Você ainda não possui agendamentos.</p>
          )}
        </div>

        <div className="blood-icon">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 C 50 20 35 35 35 50 C 35 65 42 75 50 85 C 58 75 65 65 65 50 C 65 35 50 20 50 20 Z" fill="#e63946"/>
            <circle cx="50" cy="50" r="8" fill="#fff"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
