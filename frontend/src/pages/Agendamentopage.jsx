import { useState } from "react";
import "./AgendamentoPage.scss";
import Cabecalho from "../components/cabecalho";

export default function Agendamento() {
  const [respostas, setRespostas] = useState({});
  const [data_doacao, setData] = useState("");
  const [hora_doacao, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (pergunta, valor) => {
    setRespostas((prev) => ({ ...prev, [pergunta]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          respostas,
          data_doacao,
          hora_doacao,
          local,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao enviar agendamento.");
        return;
      }

      setMsg("✅ " + data.message);
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="agendamento-container">
      <Cabecalho />
      <h1>Formulário de Triagem para Doação de Sangue</h1>

      <form className="formulario-agendamento" onSubmit={handleSubmit}>
        {/* perguntas */}
        <div className="pergunta">
          <p>Nos últimos 12 meses, você usou drogas ilícitas?</p>
          <label><input type="radio" onChange={() => handleChange("drogas", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("drogas", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você já recebeu transfusão de sangue?</p>
          <label><input type="radio" onChange={() => handleChange("transfusao", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("transfusao", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>É sua primeira doação?</p>
          <label><input type="radio" onChange={() => handleChange("primeira", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("primeira", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você teve febre ou gripe nos últimos 7 dias?</p>
          <label><input type="radio" onChange={() => handleChange("febre", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("febre", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você usa algum medicamento?</p>
          <label><input type="radio" onChange={() => handleChange("medicamento", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("medicamento", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você tem doença crônica?</p>
          <label><input type="radio" onChange={() => handleChange("cronica", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("cronica", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você viajou para fora do país?</p>
          <label><input type="radio" onChange={() => handleChange("viagem", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("viagem", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você já teve hepatite, chagas, HIV, câncer, epilepsia?</p>
          <label><input type="radio" onChange={() => handleChange("doencaGrave", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("doencaGrave", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Teve relação sexual sem preservativo?</p>
          <label><input type="radio" onChange={() => handleChange("relacao", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("relacao", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Está grávida?</p>
          <label><input type="radio" onChange={() => handleChange("gravida", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("gravida", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Está amamentando?</p>
          <label><input type="radio" onChange={() => handleChange("amamenta", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("amamenta", "nao")} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Aceita receber mensagens WhatsApp?</p>
          <label><input type="radio" onChange={() => handleChange("whatsapp", "sim")} /> Sim</label>
          <label><input type="radio" onChange={() => handleChange("whatsapp", "nao")} /> Não</label>
        </div>

        <h2>Informações de Agendamento</h2>

        <label>Data:</label>
        <input type="date" value={data_doacao} onChange={(e) => setData(e.target.value)} required />

        <label>Hora:</label>
        <input type="time" value={hora_doacao} onChange={(e) => setHora(e.target.value)} required />

        <label>Local:</label>
        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} required />

        <button type="submit" className="btn-enviar">Enviar</button>

        {msg && <p className="mensagem">{msg}</p>}
      </form>
    </div>
  );
}
