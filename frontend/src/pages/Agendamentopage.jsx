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

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Você precisa estar logado para agendar.");
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/api/agendamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        {/* 1 */}
        <div className="pergunta">
          <p>Nos últimos 12 meses, você usou drogas ilícitas?</p>
          <label><input type="radio" name="drogas" onChange={() => handleChange("drogas", "sim")} /> Sim</label>
          <label><input type="radio" name="drogas" onChange={() => handleChange("drogas", "nao")} /> Não</label>
          {respostas.drogas === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe a data:</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 2 */}
        <div className="pergunta">
          <p>Você já recebeu transfusão de sangue ou derivados?</p>
          <label><input type="radio" name="transfusao" onChange={() => handleChange("transfusao", "sim")} /> Sim</label>
          <label><input type="radio" name="transfusao" onChange={() => handleChange("transfusao", "nao")} /> Não</label>
          {respostas.transfusao === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe a data:</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 3 */}
        <div className="pergunta">
          <p>É a sua primeira doação?</p>
          <label><input type="radio" name="primeira" onChange={() => handleChange("primeira", "sim")} /> Sim</label>
          <label><input type="radio" name="primeira" onChange={() => handleChange("primeira", "nao")} /> Não</label>
          {respostas.primeira === "nao" && (
            <div className="resposta-extra">
              <label>Se não, quando foi sua última doação?</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 4 */}
        <div className="pergunta">
          <p>Você teve febre, gripe, resfriado ou diarreia nos últimos 7 dias?</p>
          <label><input type="radio" name="febre" onChange={() => handleChange("febre", "sim")} /> Sim</label>
          <label><input type="radio" name="febre" onChange={() => handleChange("febre", "nao")} /> Não</label>
          {respostas.febre === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe a data:</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 5 */}
        <div className="pergunta">
          <p>Você faz ou fez uso de algum medicamento?</p>
          <label><input type="radio" name="medicamento" onChange={() => handleChange("medicamento", "sim")} /> Sim</label>
          <label><input type="radio" name="medicamento" onChange={() => handleChange("medicamento", "nao")} /> Não</label>
          {respostas.medicamento === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe qual e para qual condição:</label>
              <input type="text" placeholder="Ex: antibiótico para infecção..." />
            </div>
          )}
        </div>

        {/* 6 */}
        <div className="pergunta">
          <p>Você já foi diagnosticado com alguma doença crônica?</p>
          <label><input type="radio" name="cronica" onChange={() => handleChange("cronica", "sim")} /> Sim</label>
          <label><input type="radio" name="cronica" onChange={() => handleChange("cronica", "nao")} /> Não</label>
          {respostas.cronica === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe qual:</label>
              <input type="text" />
              <p>Está controlada?</p>
              <label><input type="radio" name="controlada" /> Sim</label>
              <label><input type="radio" name="controlada" /> Não</label>
            </div>
          )}
        </div>

        {/* 7 */}
        <div className="pergunta">
          <p>Você viajou para fora do país nos últimos 12 meses?</p>
          <label><input type="radio" name="viagem" onChange={() => handleChange("viagem", "sim")} /> Sim</label>
          <label><input type="radio" name="viagem" onChange={() => handleChange("viagem", "nao")} /> Não</label>
          {respostas.viagem === "sim" && (
            <div className="resposta-extra">
              <label>Informe o país visitado:</label>
              <input type="text" />
              <label>Informe a data:</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 8 */}
        <div className="pergunta">
          <p>Você já teve alguma dessas doenças: Hepatite, Chagas, Câncer, HIV/AIDS, Epilepsia, Problemas cardíacos?</p>
          <label><input type="radio" name="doencaGrave" onChange={() => handleChange("doencaGrave", "sim")} /> Sim</label>
          <label><input type="radio" name="doencaGrave" onChange={() => handleChange("doencaGrave", "nao")} /> Não</label>
        </div>

        {/* 9 */}
        <div className="pergunta">
          <p>Nos últimos 12 meses, você teve relação sexual sem preservativo com uma nova pessoa?</p>
          <label><input type="radio" name="relacao" onChange={() => handleChange("relacao", "sim")} /> Sim</label>
          <label><input type="radio" name="relacao" onChange={() => handleChange("relacao", "nao")} /> Não</label>
          {respostas.relacao === "sim" && (
            <div className="resposta-extra">
              <label>Informe a data:</label>
              <input type="date" />
            </div>
          )}
        </div>

        {/* 10 */}
        <div className="pergunta">
          <p>Para mulheres: Você está grávida?</p>
          <label><input type="radio" name="gravida" onChange={() => handleChange("gravida", "sim")} /> Sim</label>
          <label><input type="radio" name="gravida" onChange={() => handleChange("gravida", "nao")} /> Não</label>
          {respostas.gravida === "sim" && (
            <div className="resposta-extra">
              <label>Se sim, informe quantos meses:</label>
              <input type="number" min="1" max="9" />
            </div>
          )}
        </div>

        <div className="pergunta">
          <p>Para mulheres: Você está amamentando?</p>
          <label><input type="radio" name="amamenta" onChange={() => handleChange("amamenta", "sim")} /> Sim</label>
          <label><input type="radio" name="amamenta" onChange={() => handleChange("amamenta", "nao")} /> Não</label>
          {respostas.amamenta === "sim" && (
            <div className="resposta-extra">
              <label>O bebê tem menos de 12 meses?</label>
              <label><input type="radio" name="bebe12" /> Sim</label>
              <label><input type="radio" name="bebe12" /> Não</label>
            </div>
          )}
        </div>

        {/* 11 */}
        <div className="pergunta">
          <p>Aceita receber mensagens via WhatsApp?</p>
          <label><input type="radio" name="whatsapp" onChange={() => handleChange("whatsapp", "sim")} /> Sim</label>
          <label><input type="radio" name="whatsapp" onChange={() => handleChange("whatsapp", "nao")} /> Não</label>
        </div>

        {/* Campos de agendamento */}
        <div className="agendamento-detalhes">
          <h2>Informações do Agendamento</h2>
          <label>Data da Doação:</label>
          <input type="date" value={data_doacao} onChange={(e) => setData(e.target.value)} required />
          <label>Hora da Doação:</label>
          <input type="time" value={hora_doacao} onChange={(e) => setHora(e.target.value)} required />
          <label>Local da Doação:</label>
          <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Ex: Hospital Municipal" required />
        </div>

        {/* Termos */}
        <div className="termos">
          <label><input type="checkbox" required /> Declaro que as informações fornecidas são verdadeiras.</label>
          <label><input type="checkbox" required /> Estou ciente de que posso ser considerado inapto após triagem.</label>
          <label><input type="checkbox" required /> Autorizo o uso dos meus dados de acordo com a LGPD.</label>
        </div>

        {/* Botões */}
        <div className="botoes">
          <button type="button" className="btn-cancelar">Cancelar</button>
          <button type="submit" className="btn-enviar">Agendar</button>
        </div>

        {msg && <p className="mensagem">{msg}</p>}
      </form>
    </div>
  );
}