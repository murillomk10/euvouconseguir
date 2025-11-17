import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import perfilIcon from "../assets/perfil.svg";
import perfilAdminIcon from "../assets/perfilAdmin.svg";
import "./cabecalho.scss";

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Carrega o nome do usuário e status de admin salvo no localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
    if (storedName) setUserName(storedName);
    setIsAdmin(storedIsAdmin);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubMenuOpen(false);
  };

  const toggleSubMenu = (e) => {
    e.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    setUserName(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <header className={`cabecalho ${isMenuOpen ? "is-open" : ""}`}>
      <div className="cabecalho__logo">
        <Link to="/home" onClick={handleLinkClick}>
          <img src={logo} alt="Logo Guia do Sangue - Voltar para a página inicial" />
        </Link>
      </div>

      <nav className="cabecalho__nav">
        <ul className="cabecalho__menu">
          <li>
            <NavLink to="/home" onClick={handleLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Passos" onClick={handleLinkClick}>Passos da doação</NavLink>
          </li>
          <li>
            <NavLink to="/QuemSomos" onClick={handleLinkClick}>Quem Somos</NavLink>
          </li>

          <li className="submenu">
            <button className="submenu__toggle" onClick={toggleSubMenu}>
              Como Doar ▾
            </button>
            {isSubMenuOpen && (
              <ul className="submenu__lista">
                <li><NavLink to="/cuidados" onClick={handleLinkClick}>Cuidados na doação</NavLink></li>
                <li><NavLink to="/menores" onClick={handleLinkClick}>Doação para menores</NavLink></li>
                <li><NavLink to="/pqdoar" onClick={handleLinkClick}>Benefícios de doar</NavLink></li>
                <li><NavLink to="/reqdoar" onClick={handleLinkClick}>Requisitos para doar</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/ondedoar" onClick={handleLinkClick}>Onde Doar</NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink to="/admin" onClick={handleLinkClick}>Admin</NavLink>
            </li>
          )}
        </ul>

        {userName ? (
          <div className="cabecalho__user">
            <Link to="/perfil" onClick={handleLinkClick}>
              <img 
                src={isAdmin ? perfilAdminIcon : perfilIcon} 
                alt="Perfil" 
              />
              <span>Olá, {userName}!</span>
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Sair
            </button>
          </div>
        ) : (
          <Link to="/login" className="cabecalho__btn" onClick={handleLinkClick}>
            Fazer Login
          </Link>
        )}
      </nav>

      <button
        className="cabecalho__toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
        <span className="cabecalho__toggle-bar"></span>
      </button>
    </header>
  );
}
