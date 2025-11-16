import React from "react";
import "./Partners.scss";

// Importando as logos
import ministerioLogo from "../../assets/ministerio-da-saude.png";
import susLogo from "../../assets/sus.png";
import saoLucasLogo from "../../assets/hemocentro-sao-lucas.png";
import mboiMirLogo from "../../assets/mboi-mirim.png";
import freiLogo from "../../assets/logo-frei.png";

export default function Partners() {
  return (
    <section className="partners-container">
      <h2>Parceiros e campanhas</h2>
      <div className="linha"></div>

      <div className="logos">
        <img src={ministerioLogo} alt="Ministério da Saúde" />
        <img src={susLogo} alt="SUS" />
        <img src={saoLucasLogo} alt="Hemocentro São Lucas" />
        <img src={mboiMirLogo} alt="Hospital M'Boi Mirim" />
        <img src={freiLogo} alt="Instituto Social Nossa Senhora de Fátima" />
      </div>
    </section>
  );
}
