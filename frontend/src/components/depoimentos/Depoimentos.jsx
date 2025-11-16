import './depoimentos.scss'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Thiago Silva Dantas',
      cidade: 'São Paulo, SP',
      texto:
        'Doei sangue pela primeira vez e fiquei surpreso com o quanto é simples. Saber que posso ajudar até três pessoas com um gesto tão pequeno me deixou muito feliz.',
    },
    {
      nome: 'Ana Paula De Souza',
      cidade: 'São Paulo, SP',
      texto:
        'Sempre tive vontade de doar, mas tinha medo. Quando finalmente fui, percebi que não doía quase nada e que a sensação de ajudar alguém é indescritível.',
    },
    {
      nome: 'Marcos Souza Fagundes',
      cidade: 'São Paulo, SP',
      texto:
        'Meu irmão precisou de transfusão e eu vi de perto a importância de ter sangue disponível. Desde então, me tornei doador regular.',
    },
    {
      nome: 'Beatriz Oliveira',
      cidade: 'Guarulhos, SP',
      texto:
        'Doei sangue com meus amigos da faculdade. A experiência foi muito tranquila e me senti parte de algo realmente importante!',
    },
    {
      nome: 'Lucas Mendes',
      cidade: 'Santo André, SP',
      texto:
        'Depois da minha primeira doação, percebi como é fácil ajudar o próximo. Agora faço questão de doar sempre que posso.',
    },
  ]

  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length)
  const prev = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)

  const visiveis = depoimentos.slice(index, index + 3).length === 3
    ? depoimentos.slice(index, index + 3)
    : [...depoimentos.slice(index), ...depoimentos.slice(0, 3 - (depoimentos.length - index))]

  return (
    <div className="container-depoimentos">
      <h1 className="titulo-depoimentos">Depoimentos</h1>
      <p className="subtitulo">Participe, doe, ajude e salve vidas!</p>

      <div className="carousel">
        <button className="seta seta-esq" onClick={prev}>
          <ChevronLeft />
        </button>

        <div className="depoimentos-grid">
          {visiveis.map((d, i) => (
            <div className="depo-card" key={i}>
              <h2>{d.nome}</h2>
              <h3>{d.cidade}</h3>
              <p>“{d.texto}”</p>
            </div>
          ))}
        </div>

        <button className="seta seta-dir" onClick={next}>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
