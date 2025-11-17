import './Footer.scss';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/logo.png'; 

export default function Footer() {
  return (
    <footer className="footer">
      
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
            <li><a href="/home">Início</a></li>
            <li><a href="/QuemSomos">Sobre</a></li>
            <li><a href="/home#locais">Locais de Doação</a></li>
            <li><a href="/home#contato">Contato</a></li>
            <li><a href="/">Sobre a empresa</a></li>
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
