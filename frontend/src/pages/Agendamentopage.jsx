import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./AgendamentoPage.scss";
import Cabecalho from "../components/cabecalho";

export default function Agendamento() {
  const navigate = useNavigate();
  const [respostas, setRespostas] = useState({});
  const [data_doacao, setData] = useState("");
  const [hora_doacao, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // Verificar se o usuário está logado
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Você precisa estar logado para acessar a página de agendamento.");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (pergunta, valor) => {
    setRespostas((prev) => ({ ...prev, [pergunta]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se o usuário está logado
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Você precisa estar logado para agendar. Redirecionando para login...");
      window.location.href = "/login";
      return;
    }

    // Validar se todas as perguntas foram respondidas
    const perguntasObrigatorias = [
      "drogas", "transfusao", "primeira", "febre", "medicamento",
      "cronica", "viagem", "doencaGrave", "relacao", "gravida",
      "amamenta", "whatsapp"
    ];

    const faltando = perguntasObrigatorias.filter(p => !respostas[p]);
    if (faltando.length > 0) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }

    // Combinar data e hora em datetime
    if (!data_doacao || !hora_doacao) {
      alert("Por favor, preencha data e hora da doação.");
      return;
    }

    const dt_doacao = `${data_doacao} ${hora_doacao}:00`;

    // Mapear respostas para pergunta1-13 (converter "sim"/"nao" para boolean)
    // Ordem das perguntas no formulário:
    // 1. drogas, 2. transfusao, 3. primeira, 4. febre, 5. medicamento,
    // 6. cronica, 7. viagem, 8. doencaGrave, 9. relacao, 10. gravida,
    // 11. amamenta, 12. whatsapp
    // Nota: O formulário tem 12 perguntas, mas o banco tem 13 campos
    // Vou mapear as 12 perguntas para pergunta1-12 e deixar pergunta13 como false
    const dadosAgendamento = {
      id_user: parseInt(userId),
      pergunta1: respostas.drogas === "sim",
      pergunta2: respostas.transfusao === "sim",
      pergunta3: respostas.primeira === "sim",
      pergunta4: respostas.febre === "sim",
      pergunta5: respostas.medicamento === "sim",
      pergunta6: respostas.cronica === "sim",
      pergunta7: respostas.viagem === "sim",
      pergunta8: respostas.doencaGrave === "sim",
      pergunta9: respostas.relacao === "sim",
      pergunta10: respostas.gravida === "sim",
      pergunta11: respostas.amamenta === "sim",
      pergunta12: respostas.whatsapp === "sim",
      pergunta13: false, // Campo extra no banco
      dt_doacao: dt_doacao,
      local_doacao: local
    };

    try {
      const response = await fetch("http://localhost:5000/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAgendamento),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro || data.message || "Erro ao enviar agendamento.");
        return;
      }

      setMsg("✅ " + data.mensagem);
      // Limpar formulário após sucesso
      setRespostas({});
      setData("");
      setHora("");
      setLocal("");
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
          <label><input type="radio" name="drogas" value="sim" checked={respostas.drogas === "sim"} onChange={(e) => handleChange("drogas", e.target.value)} /> Sim</label>
          <label><input type="radio" name="drogas" value="nao" checked={respostas.drogas === "nao"} onChange={(e) => handleChange("drogas", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você já recebeu transfusão de sangue?</p>
          <label><input type="radio" name="transfusao" value="sim" checked={respostas.transfusao === "sim"} onChange={(e) => handleChange("transfusao", e.target.value)} /> Sim</label>
          <label><input type="radio" name="transfusao" value="nao" checked={respostas.transfusao === "nao"} onChange={(e) => handleChange("transfusao", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>É sua primeira doação?</p>
          <label><input type="radio" name="primeira" value="sim" checked={respostas.primeira === "sim"} onChange={(e) => handleChange("primeira", e.target.value)} /> Sim</label>
          <label><input type="radio" name="primeira" value="nao" checked={respostas.primeira === "nao"} onChange={(e) => handleChange("primeira", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você teve febre ou gripe nos últimos 7 dias?</p>
          <label><input type="radio" name="febre" value="sim" checked={respostas.febre === "sim"} onChange={(e) => handleChange("febre", e.target.value)} /> Sim</label>
          <label><input type="radio" name="febre" value="nao" checked={respostas.febre === "nao"} onChange={(e) => handleChange("febre", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você usa algum medicamento?</p>
          <label><input type="radio" name="medicamento" value="sim" checked={respostas.medicamento === "sim"} onChange={(e) => handleChange("medicamento", e.target.value)} /> Sim</label>
          <label><input type="radio" name="medicamento" value="nao" checked={respostas.medicamento === "nao"} onChange={(e) => handleChange("medicamento", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você tem doença crônica?</p>
          <label><input type="radio" name="cronica" value="sim" checked={respostas.cronica === "sim"} onChange={(e) => handleChange("cronica", e.target.value)} /> Sim</label>
          <label><input type="radio" name="cronica" value="nao" checked={respostas.cronica === "nao"} onChange={(e) => handleChange("cronica", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você viajou para fora do país?</p>
          <label><input type="radio" name="viagem" value="sim" checked={respostas.viagem === "sim"} onChange={(e) => handleChange("viagem", e.target.value)} /> Sim</label>
          <label><input type="radio" name="viagem" value="nao" checked={respostas.viagem === "nao"} onChange={(e) => handleChange("viagem", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Você já teve hepatite, chagas, HIV, câncer, epilepsia?</p>
          <label><input type="radio" name="doencaGrave" value="sim" checked={respostas.doencaGrave === "sim"} onChange={(e) => handleChange("doencaGrave", e.target.value)} /> Sim</label>
          <label><input type="radio" name="doencaGrave" value="nao" checked={respostas.doencaGrave === "nao"} onChange={(e) => handleChange("doencaGrave", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Teve relação sexual sem preservativo?</p>
          <label><input type="radio" name="relacao" value="sim" checked={respostas.relacao === "sim"} onChange={(e) => handleChange("relacao", e.target.value)} /> Sim</label>
          <label><input type="radio" name="relacao" value="nao" checked={respostas.relacao === "nao"} onChange={(e) => handleChange("relacao", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Está grávida?</p>
          <label><input type="radio" name="gravida" value="sim" checked={respostas.gravida === "sim"} onChange={(e) => handleChange("gravida", e.target.value)} /> Sim</label>
          <label><input type="radio" name="gravida" value="nao" checked={respostas.gravida === "nao"} onChange={(e) => handleChange("gravida", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Está amamentando?</p>
          <label><input type="radio" name="amamenta" value="sim" checked={respostas.amamenta === "sim"} onChange={(e) => handleChange("amamenta", e.target.value)} /> Sim</label>
          <label><input type="radio" name="amamenta" value="nao" checked={respostas.amamenta === "nao"} onChange={(e) => handleChange("amamenta", e.target.value)} /> Não</label>
        </div>

        <div className="pergunta">
          <p>Aceita receber mensagens WhatsApp?</p>
          <label><input type="radio" name="whatsapp" value="sim" checked={respostas.whatsapp === "sim"} onChange={(e) => handleChange("whatsapp", e.target.value)} /> Sim</label>
          <label><input type="radio" name="whatsapp" value="nao" checked={respostas.whatsapp === "nao"} onChange={(e) => handleChange("whatsapp", e.target.value)} /> Não</label>
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
