import { useState } from "react";
import { useNavigate, Link } from "react-router";
import "./login.scss";
import Cabecalho2 from "../../components/Cabecalho2";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao fazer login");
        setLoading(false);
        return;
      }

      // Salva token e nome do usuário
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);

      navigate("/home");
      window.location.reload();
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Cabecalho2 />

      <h2>Entrar na conta</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="erro">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}
