import React from "react";
import "./Contato.scss";

export default function Contato() {
  return (
    <section className="contato-container">
      <div className="contato-content">

        <div className="contato-info">
          <h2>Tire duvidas aqui!</h2>
          <p>
            Se tiver alguma pergunta sobre a doação ou o formulário de triagem,
            entre em contato conosco.<br />
            Estamos aqui para ajudar!
          </p>
        </div>

        <form className="contato-form">
          <div className="form-row">
            <select>
              <option>Ajuda de SAQ</option>
              <option>Erro do site</option>
              <option>Erro de Agendamento</option>
              <option>Duvidas Gerais</option>
            </select>

            <input type="text" placeholder="Nome:" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="E-mail:" />
            <input type="text" placeholder="Telefone:" />
          </div>

          <textarea placeholder="Mensagem:" rows="5"></textarea>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>

      </div>
    </section>
  );
}
