import './sobreo.scss';
import { Link} from 'react-router';

export default function SobreHome() {
  return (
    <div className='container-sobre'>
      <div className='cartoes' data-aos="fade-up">
        <h1>Sobre o Projeto</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          O <strong>Guia do Sangue</strong> é uma iniciativa para conectar <br />
          doadores de sangue com hemocentros da Grande São Paulo. <br />
          Nosso objetivo é aumentar o número de doações <br />
          e salvar vidas através da informação.
        </p>

        <button className="botao-doar" data-aos="zoom-in" data-aos-delay="400">
          <Link to='/pqdoar'>
          Por que doar?
          </Link>
        </button>
      </div>
    </div>
  );
}
