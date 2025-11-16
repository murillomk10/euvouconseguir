import './mitos.scss'
import { CheckCircle, XCircle } from 'lucide-react' // ✅ ícones leves e elegantes

export default function Mitos() {
  return (
    <div className="container-mitos">
      <h1 className="titulo-mitos">Mitos e Verdades sobre a Doação de Sangue</h1>

      <div className="mitos-grid">
        <div className="mito-card">
          <div className="mito-header">
            <XCircle className="icon mito" />
            <h2>Mito</h2>
          </div>
          <p>Doar sangue engorda ou emagrece.</p>
          <hr />
          <span>A doação não altera o peso corporal.</span>
        </div>

        <div className="mito-card verdade">
          <div className="mito-header">
            <CheckCircle className="icon verdade" />
            <h2>Verdade</h2>
          </div>
          <p>Pessoas com gripe, febre ou resfriado não podem doar.</p>
          <hr />
          <span>O doador deve estar em boas condições de saúde.</span>
        </div>

        <div className="mito-card">
          <div className="mito-header">
            <XCircle className="icon mito" />
            <h2>Mito</h2>
          </div>
          <p>Doar sangue faz mal à saúde.</p>
          <hr />
          <span>A doação é totalmente segura e o corpo se recupera rapidamente.</span>
        </div>

        <div className="mito-card">
          <div className="mito-header">
            <XCircle className="icon mito" />
            <h2>Mito</h2>
          </div>
          <p>Doar sangue dói.</p>
          <hr />
          <span>Há apenas um pequeno desconforto da picada da agulha.</span>
        </div>
      </div>
    </div>
  )
}
