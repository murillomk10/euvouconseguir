import { Link } from 'react-router';
import Cabecalho from '../../components/cabecalho';
import './empresa.scss';
import cardempresa1 from '../../assets/cardempresa1.png';
import cardempresa2 from '../../assets/cardempresa2.png';
import logoempresa1 from '../../assets/logoempresa1.png';
import logoempresa2 from '../../assets/logoempresa2.png';
import logoempresa3 from '../../assets/logoempresa3.png';
export default function Empresa() {
    return (
        <div className="empresa-container">
            <header className='cabecalho-empresa'>
                 <nav className='menu-empresa-container'>
                    <h1 className='logo-empresa'>Codez</h1>
                    <ul className='menu-empresa'>
                        <li className='menu-empresa-item'>inicio</li>
                        <li className='menu-empresa-item'>Serviços</li>
                        <li className='menu-empresa-item'>Sobre-nós</li>
                    </ul>
                 </nav>

            </header>
            <main>
                <section className='sobre-empresa-container'>
                    <div className='sobre-empresa-content'></div>
                        <h1 className='titulo-principal-empresa'>Desenvolvemos mais que sistemas, criamos experiências</h1>
                        <img src={ cardempresa1 } alt="" />
                        <p className='texto-principal-empresa'>Prepare seu negócio para o futuro digital.</p>
                        <Link to="/home" className='btn-empresa'>Nosso projeto</Link>
                </section>
                <section className='missao-visao-valores-container'>
                    <div>
                        <h2 className='titulo-missao-visao-valores'>Historia e Missão</h2>
                        <p  className='texto-missao-visao-valores'>Com uma equipe focada em qualidade e inovação, oferecemos também gerenciamento completo de servidores e bancos de dados, garantindo segurança e desempenho.</p>

                        <h2 className='titulo-missao-visao-valores'>Visão</h2>
                        <p className='texto-missao-visao-valores'>Ser referência nacional em desenvolvimento de sites e soluções de infraestrutura digital.</p>
                    </div>
                </section>
                <div className="equipe-container">
      <h2>Equipe e Colaboradores</h2>

      <div className="tabela">
        <div className="card">
          <p><strong>Nome:</strong> Murillo Gaspar</p>
          <p><strong>Função:</strong> Gerenciamento de Banco de Dados e UI/UX.</p>
        </div>

        <div className="card">
          <p><strong>Nome:</strong> Kauã Meneses</p>
          <p><strong>Função:</strong> Desenvolvedor FrontEnd e UX/UI.</p>
        </div>

        <div className="card">
          <p><strong>Nome:</strong> Rafael Porto</p>
          <p><strong>Função:</strong> Desenvolvedor BackEnd.</p>
        </div>

        <div className="card">
          <p><strong>Nome:</strong> Pedro Henrique</p>
          <p><strong>Função:</strong> Desenvolvedor FrontEnd e UX/UI.</p>
        </div>

        <div className="card">
          <p><strong>Nome:</strong> Sthella Bottari</p>
          <p><strong>Função:</strong> Desenvolvedor BackEnd.</p>
        </div>

        <div className="card">
          <p><strong>Nome:</strong> Arthur</p>
          <p><strong>Função:</strong> Desenvolvedor FrontEnd.</p>
        </div>
      </div>

      <section className='Empresas-Parceiras'>
        <h2>Empresas Parceiras</h2>
        <div className='logos'>
            <img src={ logoempresa1 } alt="" />
            <img src={ logoempresa2 } alt="" />
            <img src={ logoempresa3 } alt="" />
        </div>
      </section>
    </div>
    <section className='servicos-prestados'>
        <h2>Serviços Prestados pela Codez</h2>
        <p>A Codez oferece soluções completas em tecnologia para empresas, incluindo o desenvolvimento de sites institucionais, criação de landing pages personalizadas e design responsivo para todos os dispositivos. Também atuamos no registro e configuração de domínios, hospedagem e manutenção de sites, além do gerenciamento de servidores Linux e Windows. Nossa equipe é especializada na administração de bancos de dados como MySQL, PostgreSQL e SQL Server, garantindo segurança, desempenho e estabilidade. Oferecemos ainda integração com APIs e sistemas de pagamento, além de suporte técnico contínuo e consultoria em infraestrutura digital.</p>
        <img src={ cardempresa2 } alt="" />
    </section>
            </main>
        </div>
    )
}