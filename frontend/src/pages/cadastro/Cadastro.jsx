import React, { useState } from "react";
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
    <div className="min-h-screen bg-[#fdfdfd] flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
      >
        <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">
          Cadastro de Doador
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
            type="text"
            name="rg"
            placeholder="RG"
            value={formData.rg}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
            type="date"
            name="nascimento"
            placeholder="Data de nascimento"
            value={formData.nascimento}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
            type="text"
            name="mae"
            placeholder="Nome da mãe"
            value={formData.mae}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço completo"
            value={formData.endereco}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none md:col-span-2"
          />

          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          >
            <option value="">Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>

          <select
            name="tipo_sanguineo"
            value={formData.tipo_sanguineo}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
          >
            <option value="">Tipo sanguíneo</option>
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

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}

        <button
          type="submit"
          className="mt-6 w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          Cadastrar
        </button>

        <p className="text-center text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Fazer login
          </span>
        </p>
      </form>
    </div>
  );
}
