import './Cabecalho2.scss'
import { Link } from 'react-router'
import logo from '../assets/LogoGuiaDoSangue.png'

export default function Cabecalho2() {
  return (
    <header className="cabecalho2">
      <div className="cabecalho2-container">
        <img className="cabecalho2-logo" src={logo} alt="Logo" />
        <Link to="/home" className="cabecalho2-botao">Voltar</Link>
      </div>
    </header>
  )
}
