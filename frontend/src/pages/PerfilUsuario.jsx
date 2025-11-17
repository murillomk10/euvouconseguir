import { useState } from 'react';
import './PerfilUsuario.scss';
import Cabecalho from '../components/cabecalho';

export default function PerfilUsuario() {
  const [usuario] = useState({
    nome: 'João da Silva',
    cpf: '123.456.789-00',
    telefone: '(11) 98765-4321',
    dataNascimento: '15/03/1990',
    mae: 'Maria Silva',
    endereco: 'Rua das Flores, 123 - São Paulo, SP',
    sexoBiologico: 'Masculino',
    tipoSanguineo: 'O+',
    email: 'joao@email.com',
    senha: '••••••••'
  });

  const [agendamentos] = useState([
    {
      id: 1,
      data: '25/11/2024',
      horario: '14:00',
      status: 'em processo',
      observacao: 'Espera autorizada até sexta-feira'
    }
  ]);

  const agendamentosRealizados = [
    { id: 1, data: '10/11/2024', horario: '10:30' },
    { id: 2, data: '03/11/2024', horario: '15:00' }
  ];

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
              <span className="info-value">{usuario.nome}</span>
            </div>
            <div className="info-item">
              <span className="info-label">CPF:</span>
              <span className="info-value">{usuario.cpf}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Número de telefone:</span>
              <span className="info-value">{usuario.telefone}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Data de Nascimento:</span>
              <span className="info-value">{usuario.dataNascimento}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Nome da Mãe ou Responsável:</span>
              <span className="info-value">{usuario.mae}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Endereço Completo:</span>
              <span className="info-value">{usuario.endereco}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sexo Biológico:</span>
              <span className="info-value">{usuario.sexoBiologico}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Tipo Sanguíneo:</span>
              <span className="info-value">{usuario.tipoSanguineo}</span>
            </div>
            <div className="info-item">
              <span className="info-label">E-mail:</span>
              <span className="info-value">{usuario.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Senha:</span>
              <span className="info-value">{usuario.senha}</span>
            </div>
          </div>
        </div>

        <div className="agendamentos-section">
          <h2 className="section-title">Seus Agendamentos:</h2>

          <div className="agendamento-em-processo">
            <p className="agendamento-status">Um agendamento em processo.....</p>
            <p className="agendamento-obs">(Disponível autorizado até segunda-feira)</p>
            {agendamentos.map((agendamento) => (
              <div key={agendamento.id} className="agendamento-card">
                <div className="agendamento-info">
                  <span className="data">{agendamento.data}</span>
                  <span className="horario">{agendamento.horario}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="agendamentos-realizados">
            <h3 className="agendamentos-titulo">Agendamentos realizados:</h3>
            <div className="agendamentos-list">
              {agendamentosRealizados.map((agendamento) => (
                <div key={agendamento.id} className="agendamento-item">
                  <span className="data">{agendamento.data}</span>
                  <span className="horario">{agendamento.horario}</span>
                </div>
              ))}
            </div>
          </div>
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
