import './DoacaoPara.scss';
import cardao from '../assets/cardao.png'
import Footer from '../components/footer';
import casaljovem from '../assets/casaljovem.svg'
import muienega from '../assets/muienega.svg'
import familia from '../assets/familia.svg'
import cearensi from '..//assets/doacao.svg'
import muiecard from '..//assets/branquelo.svg'
import Cabecalho from '../components/cabecalho';

export default function DoacaoParaMenores() {
  return (
   <div className="container-menores">
     <Cabecalho />
       <div className="banner-cuidados">
        <div className="conteudo-banner">
          <h1 className="titulo-principal">Doação para menores de idade</h1>
          <p className="texto-inicial">A doação para menores deve seguir a uma série de requisitos obrigatórios, além dos que se aplicam a todos os doadores. Conheça as exigências que devem ser seguidas:
          </p>
        </div>
      </div>

      
      <div className="card-requisitos">        <div className="linha"></div>
    <div className="conteudo">          <h2>
        <span className="emoji">👦</span>  Quem Pode Doar? </h2>
      <ul>
        <li>Idade entre 16 e 17 anos.</li>
        <li>Peso mínimo de 50 kg.</li>
        <li>Boa saúde e disposição no dia.</li>
        <li>Autorização dos pais ou responsável legal.</li>
      </ul>
    </div>
    <img src={ casaljovem } alt=" Pessoas com predios no fundo" className="card-image" />
  </div>

  <div className="card-impedimentos">        <div className="linha"></div>
    <div className="conteudo">          <h2>
        <span className="emoji">📝</span> Documentos Necessários
      </h2>
      <p className="aviso"></p>
      <ul>
        <li>Documento de identidade do menor (RG ou certidão de nascimento).</li>
        <li>Documento de identidade do responsável.</li>
        <li>Formulário de autorização preenchido e assinado pelo responsável.</li>
      </ul>
    </div>
    <img src={ muienega } alt="Mulher Timer" className="card-image" />
  </div>

  <div className="card">        <div className="line"></div>
    <div className="content">          <h2>👨‍👩‍👧‍👦 O Papel dos Pais/Responsáveis</h2>
      <p className="alerta">  </p>
      <ul>
        <li>Acompanhar o menor até o hemocentro.</li>
        <li>Assinar a autorização no local.</li>
        <li>Aprovar a doação após esclarecimentos.</li>
        <li>Apoiar o adolescente durante todo o processo.</li>
      </ul>
    </div>
    <img src={ familia } alt=" Casal de mãos dadas" className="card-image" />
  </div>

  <div className="card-aqui">        <div className="line"></div>
    <div className="content">          <h2>❤️ Benefícios para os Jovens Doadores</h2>
      <ul>
        <li>
          Salvar vidas - seu gesto faz diferença!            </li>
        <li>
          Check-up gratuito da sua saúde.      </li>
          <li> Experiência positiva de cidadania. </li>
          <li>Direitos iguais aos dos doadores adultos. </li>
      </ul>
    </div>
    <img src={ cearensi } alt="Homem em Viagem" className="card-image" />
  </div>

  <div className="card-info">        <div className="line"></div>
    <div className="content">          <h2>💡 Dicas Importantes</h2>
      <ul>
        <li>Coma bem antes de doar (nunca doe em jejum).</li>
        <li>Beba bastante água.</li>
        <li>Durma bem na noite anterior.</li>
        <li>Use roupas confortáveis.</li>
        <li>Traga seu responsável - é obrigatório!.</li>
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