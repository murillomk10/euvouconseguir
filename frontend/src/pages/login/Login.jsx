import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./login.scss";
import Cabecalho2 from "../../components/Cabecalho2";

export default function Login() {
    const navigate = useNavigate();

    const [modo, setModo] = useState("login");

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [data_nascimento, setNascimento] = useState("");
    const [nm_mae, setMae] = useState("");
    const [endereco, setEndereco] = useState("");
    const [sexo, setSexo] = useState("");
    const [tp_sanguineo, setSangue] = useState("");

    const [mensagem, setMensagem] = useState("");

    async function logar() {
        try {
            const resposta = await axios.post("http://localhost:5000/usuario/login", {
                email,
                senha
            });


            if (email === "adm@gmail.com" && senha === "adm") {
                setMensagem("Login realizado com sucesso!");
                return setTimeout(() => navigate("/admin"), 800);
            }

            if (resposta.data) {
                setMensagem("Login realizado com sucesso!");
                return setTimeout(() => navigate("/home"), 800);
            }

        } catch (err) {
            console.error(err);
            setMensagem("Email ou senha incorretos.");
        }
    }

    async function registrar() {
        try {
            const resposta = await axios.post("http://localhost:5000/usuario/registrar", {
                nome,
                email,
                senha,
                cpf,
                rg,
                telefone,
                data_nascimento,
                nm_mae,
                endereco,
                sexo,
                tp_sanguineo
            });

            if (resposta.data) {
                setMensagem("Usuário cadastrado com sucesso!");
                setModo("login");
                limparCampos();
            }

        } catch (err) {
            console.error(err);
            setMensagem("Erro ao registrar usuário.");
        }
    }

    function limparCampos() {
        setNome("");
        setEmail("");
        setSenha("");
        setCpf("");
        setRg("");
        setTelefone("");
        setNascimento("");
        setMae("");
        setEndereco("");
        setSexo("");
        setSangue("");
    }

    return (
        <div className="login-container">

          <Cabecalho2 />

            <h2>{modo === "login" ? "Login do Usuário" : "Registrar Conta"}</h2>

            {modo === "login" ? (
                <form>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button type="button" onClick={logar}>
                        Entrar
                    </button>

                    <p>
                        Não tem conta?{" "}
                        <a className="primary-link" onClick={() => setModo("registrar")}>
                            Criar conta
                        </a>
                    </p>

                    {mensagem && <p className="erro">{mensagem}</p>}
                </form>
            ) : (
                <form>
                    <label>Nome completo</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Senha</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <label>CPF</label>
                    <input value={cpf} onChange={(e) => setCpf(e.target.value)} />

                    <label>RG</label>
                    <input value={rg} onChange={(e) => setRg(e.target.value)} />

                    <label>Telefone</label>
                    <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />

                    <label>Data de nascimento</label>
                    <input type="date" value={data_nascimento} onChange={(e) => setNascimento(e.target.value)} />

                    <label>Nome da mãe</label>
                    <input value={nm_mae} onChange={(e) => setMae(e.target.value)} />

                    <label>Endereço</label>
                    <input value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                    <label>Sexo</label>
                    <input value={sexo} onChange={(e) => setSexo(e.target.value)} />

                    <label>Tipo sanguíneo</label>
                    <input value={tp_sanguineo} onChange={(e) => setSangue(e.target.value)} />

                    <button type="button" onClick={registrar}>
                        Registrar
                    </button>

                    <p>
                        Já tem conta?{" "}
                        <a className="primary-link" onClick={() => setModo("login")}>
                            Entrar
                        </a>
                    </p>

                    {mensagem && <p className="erro">{mensagem}</p>}
                </form>
            )}

        </div>
    );
}
