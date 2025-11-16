import Cabecalho from '../components/cabecalho';
import CartaoDestaque from '../components/cartaoDestaque/destaque';
import Footer from '../components/footer';
import './SobreNos.scss'

const cartoes = [
  {
     "imagem":"/images/image.webp",
      "titulo":"Missão",
      "descricao":"Promover a conscientização sobre a importância da doação de sangue e facilitar o acesso a informações seguras e atualizadas."
  },
  {
    "imagem":"/images/image2.webp",
    "titulo":"Visão",
    "descricao":"Ser reconhecido como uma plataforma referência em incentivo à doação de sangue em todo o país."
  },
  {
    "imagem":"/images/image3.webp",
    "titulo":"Valores",
    "descricao":"Solidariedade, empatia, compromisso, ética e responsabilidade social.",
  }
]

export default function Sobre() {
  return (

    
    <div className="layout">
    < Cabecalho />
      <main className="page-main">
        <h1 className='titulo-principal'>Nossa Historia</h1>
        <section className="inicio">
          <div className="texto-principal">
            
            <p>O Guia do Sangue nasceu com o propósito de orientar e incentivar pessoas a se tornarem doadoras de sangue. Nosso trabalho é informar, inspirar e conectar solidariedade, mostrando que cada doação representa uma nova chance de vida.</p>
          </div>
          <img src="/images/image4.webp" alt="mulher" className="imagem-historia" />
        </section>

        <div className="cartoes">
          {
            cartoes.map(c => 
              <CartaoDestaque
                imagem={c.imagem}
                titulo={c.titulo}
                descricao={c.descricao}
              />     
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}