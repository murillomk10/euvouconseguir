import './PassosDoacao.scss';
import Cabecalho from '../components/Cabecalho';
import Footer from '../components/Footer';
import PassosPrincipais from '../assets/PassosPrincipais.svg';
import cardaoPassos from '../assets/cardaoPassos.png';

export default function PassosDaDoacao() {
  return (
    <div className="container-PassosDoacao">
      <Cabecalho />

      <div className="banner-cuidados">
        <div className="conteudo-banner">
          <h1 className="titulo-principal">Passos da Doação</h1>
          <p className="texto-inicial">
            A doação de sangue é um processo organizado e cuidadoso, pensado para seu conforto e segurança, desde sua chegada até o momento em que você sai sabendo que fez a diferença. Abaixo, apresentamos o caminho que você percorrerá para se tornar um doador:
          </p>
        </div>
      </div>

      <div className="passos-image-central">
        <img src={PassosPrincipais} alt="Passos da doação" />
      </div>

      <div className="card-agendamento">
        <img className="cardao" src={cardaoPassos} alt="Agendamento" />
        <button className="btn">Agende sua doação aqui</button>
      </div>

      <Footer />
    </div>
  );
}
