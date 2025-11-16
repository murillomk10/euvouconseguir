import './Footer.scss';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/logo.png'; // ajuste o caminho da sua logo

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Onda no topo */}
      <div className="wave"></div>

      <div className="footer-container">

        <div className="footer-col">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            O Guia do Sangue conecta doadores com hemocentros da Grande São Paulo,
            promovendo informação para salvar vidas.
          </p>
        </div>

        <div className="footer-col">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/locais">Locais de Doação</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Conecte-se</h4>
          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <p className="footer-copy">© 2025 Guia do Sangue — Todos os direitos reservados</p>
    </footer>
  );
}
