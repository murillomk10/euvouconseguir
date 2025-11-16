import Cabecalho from '../components/cabecalho';
import './PorQue.scss';
import cardao from '../assets/cardao.png'
import Footer from '../components/footer';
import Social from '../assets/socialComunity.svg'
import hearton from '../assets/hearton.svg'
import casal from '..//assets/casal.svg'
import cearensi from '..//assets/mentaliti.svg'
import muiecard from '..//assets/muie.svg'

export default function RequesitosParaDoar() {
  return (
   <div className="container-beneficios">
     <Cabecalho />
       <div className="banner-cuidados">
        <div className="conteudo-banner">
          <h1 className="titulo-principal">Benefícios de Doar</h1>
          <p className="texto-inicial">A doação de sangue não só salva vidas, como também traz diversos benefícios para o próprio doador. Conheça alguns deles e veja por que esse gesto de solidariedade é tão importante.
          </p>
        </div>
      </div>

      
      <div className="card-requisitos">        <div className="linha"></div>
    <div className="conteudo">          <h2>
        <span className="emoji">💝</span> Benefícios Sociais </h2>
      <ul>
        <li>1 dia de folga no trabalho por lei (com apresentação do comprovante).</li>
        <li>Prioridade em atendimentos em hospitais públicos (em alguns estados).</li>
        <li>Vantagem em concursos públicos conforme legislação local.</li>
        <li>Reconhecimento social como doador frequente.</li>
        <li>Comprovante válido como documento oficial.</li>
      </ul>
    </div>
    <img src={ Social } alt=" Pessoas com predios no fundo" className="card-image" />
  </div>

  <div className="card-impedimentos">        <div className="linha"></div>
    <div className="conteudo">          <h2>
        <span className="emoji">💪</span>  Benefícios para sua Saúde
      </h2>
      <p className="aviso"></p>
      <ul>
        <li>Check-up gratuito com exames de sangue (hepatite, HIV, sífilis, etc.).</li>
        <li>Controle de pressão arterial e sinais vitais.</li>
        <li>Avaliação dos níveis de hemoglobina.</li>
        <li>Renovação natural das células sanguíneas.</li>
        <li>Equilíbrio dos níveis de ferro no organismo.</li>
      </ul>
    </div>
    <img src={ hearton } alt="Mulher Timer" className="card-image" />
  </div>

  <div className="card">        <div className="line"></div>
    <div className="content">          <h2>👫 Impacto Coletivo</h2>
      <p className="alerta">  </p>
      <ul>
        <li>Salva até 4 vidas com uma única doação.</li>
        <li>Ajuda pacientes em tratamento de câncer e outras doenças.</li>
        <li>Suporta emergências e cirurgias complexas.</li>
        <li>Fortalece o sistema público de saúde.</li>
        <li>Mantém estoques regulares nos bancos de sangue.</li>
      </ul>
    </div>
    <img src={ casal } alt=" Casal de mãos dadas" className="card-image" />
  </div>

  <div className="card-aqui">        <div className="line"></div>
    <div className="content">          <h2>😊 Benefícios Emocionais</h2>
      <ul>
        <li>
          Sensação de bem-estar e realização pessoal.            </li>
        <li>
          Consciência tranquila por ajudar o próximo.            </li>
          <li> Exemplo de solidariedade para a comunidade. </li>
          <li>Satisfação de fazer a diferença real. </li>
          <li>Fortalece o senso de cidadania. </li>
      </ul>
    </div>
    <img src={ cearensi } alt="Homem em Viagem" className="card-image" />
  </div>

  <div className="card-info">        <div className="line"></div>
    <div className="content">          <h2>📋 Vantagens Práticas</h2>
      <ul>
        <li>Processo 100% seguro com material descartável.</li>
        <li>Atendimento humanizado por profissionais.</li>
        <li>Lanche e hidratação oferecidos após doação.</li>
        <li>Retorno rápido dos resultados dos exames.</li>
        <li>Ambiente acolhedor e confortável.</li>
      </ul>
    </div>
    <img src={ muiecard } alt="muie magica mediakkkj" className="card-image" />
  </div>

  <div className='card-agendamento'>
    <img className='cardao' src={cardao} alt="cardenorme" />
    <button className="btn">Agende sua doação aqui</button>
  </div>

  <Footer />
</div>
  )

}