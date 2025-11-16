import { useState } from "react";
import "./OndeDoar.scss";
import Cabecalho from "../components/cabecalho";
import Footer from "../components/Footer";

export default function OndeDoar() {

  const locais = [
    {
      bairro: "Aclimação",
      unidade: "Hospital do Servidor Público Municipal",
      endereco: "R. Castro Alves, 60 - 4º andar - Aclimação",
      telefone: "(11) 3277-5303", 
      site: "https://www.colsan.org.br",
      siteNome: "colsan.org.br",
    },
    {
      bairro: "Bela Vista",
      unidade: "Beneficência Portuguesa",
      endereco: "Rua Maestro Cardim, 1041 - Bela Vista, São Paulo - CEP 01323-001",
      telefone: "(11) 3505-4800 / (11) 3505-4839",
      site: "http://www.bp.org.br/bp/pacientes-evisitantes/doacao-desangue-e-plaquetas",
      siteNome: "bp.org.br",
    },
    {
      bairro: "Bela Vista",
      unidade: "Hospital Sírio Libanês",
      endereco: "Rua Dona Adma Jafet, 91 - CEP 01308-050",
      telefone: "(11) 3394-5260",
      site: "https://hospitalsiriolibanes.org.br/hospital/Paginas/bancos-de-sangue.aspx",
      siteNome: "hospitalsiriolibanes.org.br",
    },
    {
      bairro: "Bela Vista",
      unidade: "Hospital Santa Catarina",
      endereco: "Av. Paulista, 200 - 4º andar - Bloco F",
      telefone: "(11) 3016-4111",
      site: "http://www.doeamor.com.br/",
      siteNome: "doeamor.com.br",
    },
    {
      bairro: "Centro",
      unidade: "Hemocentro da Santa Casa de São Paulo",
      endereco: "Rua Marques de Itu, 579",
      telefone: "(11) 2176-7258",
      site: "https://www.santacasasp.org.br/doesangue",
      siteNome: "santacasasp.org.br",
    },
    {
      bairro: "Centro",
      unidade: "Hospital Pérola Byington",
      endereco: "Av. Brigadeiro Luiz Antonio, 683 / 2º Subsolo",
      telefone: "(11) 3248-8111",
      site: "https://www.santacasasp.org.br/doesangue",
      siteNome: "santacasasp.org.br",
    },
    {
      bairro: "Centro",
      unidade: "Hospital Sírio Libanês",
      endereco: "Rua Peixoto Gomide 613 - 1º subsolo - Cerqueira César - São Paulo - SP",
      telefone: "(11) 2176-7258",
      site: "https://www.santacasasp.org.br/doesangue",
      siteNome: "santacasasp.org.br",
    },
    {
      bairro: "Centro",
      unidade: "Hospital 9 de Julho",
      endereco: "Av. Brigadeiro Luiz Antonio, 683 / 2º Subsolo",
      telefone: "11-3556-6000",
      site: "https://www.hospitalsiriolibanes.com.br",
      siteNome: "hospitalsiriolibanes.com.br",
    },
    {
      bairro: "Cerqueira César",
      unidade: "Fundação PróSangue/Posto Clínicas Hospital das Clínicas",
      endereco: "Av. Dr. Enéas Carvalho de Aguiar, 155 - 1º andar",
      telefone: "4573-7800",
      site: "https://www.prosangue.sp.gov.br/home/",
      siteNome: "hospitalsiriolibanes.com.br",
    },
    {
      bairro: "Ermelino Matarazzo",
      unidade: "Hospital Municipal Alípio Correa Neto ",
      endereco: "Al. Rodrigo de Brum, 1989- Ermelino Matarazzo",
      telefone: "(11) 2545-4652",
      site: "https://colsan.org.br/site/",
      siteNome: "hospitalsiriolibanes.com.br",
    },
    {
      bairro: "Ibirapuera",
      unidade: "Fundação PróSangue/Posto Dante Pazzanese Hospital Dante Pazzanese ",
      endereco: "Av. Dante Pazzanese, 500 ",
      telefone: "4573-7800",
      site: "https://www.prosangue.sp.gov.br/home/",
      siteNome: "hospitalsiriolibanes.com.br",
    },
    {
      bairro: "Itaquera",
      unidade: "Hospital Santa Marcelina-Itaquera ",
      endereco: "Rua Harry Danhenberg,473-Vila Camosina-São PauloSP-CEP: 08270-010 (Zona leste) ",
      telefone: "(11) 2523-0546 (11) 2070-6081 ",
      site: "https://www.prosangue.sp.gov.br/home/",
      siteNome: "hospitalsiriolibanes.com.br",
    },

  ];

  // Estado do filtro
  const [busca, setBusca] = useState("");

  // Normaliza string (remove acentos e deixa minúscula)
  const normalize = (str = "") =>
    String(str)
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  // Filtragem por bairro, unidade (nome do hospital) ou siteNome
  const locaisFiltrados = locais.filter((l) => {
    const q = normalize(busca);
    if (!q) return true;
    return (
      normalize(l.bairro).includes(q) ||
      normalize(l.unidade).includes(q) ||
      normalize(l.siteNome).includes(q)
    );
  });

  return (
    <div className="doar-page">
      <Cabecalho />

      <section className="doar-header">
        <h1>Encontre o posto de doação mais próximo de você</h1>
        <p>
          Veja os locais disponíveis em São Paulo — com horários, endereços e
          informações completas.
        </p>
      </section>

      <div className="doar-search-bar">
        <i className="fa fa-search icon"></i>
        <input
          type="text"
          placeholder="Procure por bairro ou hospital..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button>Buscar</button>
      </div>

      <div className="doar-table-container">
        <table className="doar-table">
          <thead>
            <tr>
              <th>Bairro</th>
              <th>Unidade</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {locaisFiltrados.length > 0 ? (
              locaisFiltrados.map((l, i) => (
                <tr key={i}>
                  <td>{l.bairro}</td>
                  <td>{l.unidade}</td>
                  <td>{l.endereco}</td>
                  <td>{l.telefone}</td>
                  <td>
                    <a href={l.site} target="_blank" rel="noreferrer">
                      {l.siteNome}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  Nenhum resultado encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
