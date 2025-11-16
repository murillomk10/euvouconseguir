import Cabecalho from "../components/cabecalho";
import cardao from "../assets/cardao.png";
import bebida from "../assets/bebida.svg";
import durante from "../assets/durante.svg";
import leitura from "../assets/leitura.svg";
import tiposangue from "../assets/tiposangue.svg";
import "../pages/cuidados.scss";
import Footer from "../components/footer";

export default function CuidadosNaDoacao() {
  return (
    <div className="container-cuidados">
      <Cabecalho />

      <div className="banner-cuidados">
        <div className="conteudo-banner">
          <h1 className="titulo-principal">Cuidados na Doação</h1>
          <p className="texto-inicial">
            Doe sangue, salve vidas! Uma única doação pode ajudar até quatro <br />
            pessoas. Veja abaixo quais cuidados você deve ter:
          </p>
        </div>
      </div>

      <div className="card-requisitos">
        <div className="linha"></div>
        <div className="conteudo">
          <h2>
            <span className="emoji">🩸</span> ANTES de Doar
          </h2>
          <ul>
            <li>Durma bem na noite anterior (pelo menos 6 horas).</li>
            <li>Faça uma refeição leve e evite comidas gordurosas.</li>
            <li>Não vá em jejum. Coma e beba algo antes.</li>
            <li>Beba bastante água ou suco.</li>
            <li>Evite bebidas alcoólicas 12 horas antes.</li>
            <li>Leve um documento oficial com foto.</li>
          </ul>
        </div>
        <img src={bebida} alt="Antes de doar" className="img-card" />
      </div>

      <div className="card-impedimentos">
        <div className="linha"></div>
        <div className="conteudo">
          <h2>
            <span className="emoji">💉</span> DURANTE a Doação
          </h2>
          <ul>
            <li>O processo todo leva cerca de 1 hora.</li>
            <li>A coleta de sangue é rápida (10 a 15 minutos).</li>
            <li>Use roupas confortáveis.</li>
            <li>Relaxe e respire fundo. Você está em boas mãos.</li>
          </ul>
        </div>
        <img src={durante} alt="Durante a doação" className="img-card" />
      </div>

      <div className="card">
        <div className="line"></div>
        <div className="content">
          <h2>🍎️ DEPOIS de Doar</h2>
          <ul>
            <li>Beba bastante líquido no resto do dia.</li>
            <li>Evite esforço físico por 12 horas.</li>
            <li>Não fume por pelo menos 2 horas.</li>
            <li>Evite bebidas alcoólicas por 12 horas.</li>
            <li>Coma o lanche fornecido e descanse alguns minutos.</li>
            <li>Se sentir tontura, sente-se e levante as pernas.</li>
            <li>Mantenha o curativo no local por algumas horas.</li>
          </ul>
        </div>
        <img src={leitura} alt="Depois de doar" className="img-card" />
      </div>

      <div className="section">
        <h2 className="titulo-secundario">🩺 Entenda a Compatibilidade Sanguínea:</h2>
        <img className="tabela-de-tipos" src={tiposangue} alt="Tabela de compatibilidade sanguínea" />
        <ul className="lista-simples">
          <li>Doador Universal: O- é o tipo mais versátil e crucial em emergências.</li>
          <li>Receptor Universal: AB+ pode receber sangue de qualquer tipo.</li>
        </ul>
      </div>

      <div className="card-agendamento">
        <img className="cardao" src={cardao} alt="Agendamento" />
        <button className="btn">Agende sua doação aqui</button>
      </div>

      <Footer />
    </div>
  );
}
