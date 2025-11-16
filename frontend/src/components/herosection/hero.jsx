import './heros.scss'
import { Link } from 'react-router';

export default function MeuComponente() {
  return (
    <div className='Container-herosection'>
        <div className='conteudo-hero'>
        <h1 className='titulo-principalok'>Doe Sangue,<br /> salve vidas</h1>
        <p className='texto-principal'>Encontre um posto de doação mais <br /> Proximo de você na Grande São Paulo</p>
         <div className='botoes'>
        <button className='btn-vermelho'><Link to='/ondedoar'>encontre um local para doação</Link></button>
        <button className='btn-vermelho'><Link to='/agendamento'>Agende sua Doação</Link></button>
        </div>
      </div>  
    </div>
  );
}