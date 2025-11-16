import React, { useState } from "react";
import "./cadastro.scss";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    rg: "",
    telefone: "",
    nascimento: "",
    mae: "",
    endereco: "",
    sexo: "",
    tipo_sanguineo: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", formData);
      setSuccess("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-main">
        <div className="cadastro-container">
          <div className="titulo">
            <h1>Cadastro de Doador</h1>
            <div className="subtitulo">Preencha seus dados para se cadastrar</div>
          </div>

          <form onSubmit={handleSubmit} className="form-cadastro">
            <div className="form-column">
              <div className="form-row">
                <div className="campo">
                  <label>Nome completo</label>
                  <input name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label>E-mail</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="campo">
                  <label>Senha</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="campo">
                  <label>CPF</label>
                  <input name="cpf" value={formData.cpf} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="campo">
                  <label>RG</label>
                  <input name="rg" value={formData.rg} onChange={handleChange} />
                </div>
                <div className="campo">
                  <label>Telefone</label>
                  <input name="telefone" value={formData.telefone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="campo">
                  <label>Data de nascimento</label>
                  <input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} />
                </div>
                <div className="campo">
                  <label>Nome da mãe</label>
                  <input name="mae" value={formData.mae} onChange={handleChange} />
                </div>
              </div>

              <div className="campo">
                <label>Endereço completo</label>
                <input name="endereco" value={formData.endereco} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="campo">
                  <label>Sexo</label>
                  <select name="sexo" value={formData.sexo} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="campo">
                  <label>Tipo sanguíneo</label>
                  <select name="tipo_sanguineo" value={formData.tipo_sanguineo} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-side">
              <div className="card-side">
                <div className="label">Nome</div>
                <div className="value">{formData.name || "—"}</div>
              </div>

              <div className="card-side">
                <div className="label">E-mail</div>
                <div className="value">{formData.email || "—"}</div>
              </div>

              <div className="card-side">
                <div className="label">Tipo Sanguíneo</div>
                <div className="value">{formData.tipo_sanguineo || "—"}</div>
              </div>
            </div>

            {error && <p className="erro">{error}</p>}
            {success && <p className="erro" style={{ color: "green" }}>{success}</p>}

            <div className="botoes">
              <button type="button" className="botao cancelar" onClick={() => navigate(-1)}>
                Cancelar
              </button>
              <button type="submit" className="botao cadastrar">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
