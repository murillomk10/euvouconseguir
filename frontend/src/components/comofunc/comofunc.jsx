import './comfuncio.scss'
import localizaoicon from '../../assets/location.svg'
import calendaricon from '../../assets/calendar.svg'
import hearticon from '../../assets/heart.svg'

export default function ComoHome(){
    return(
        <div className="container-como">
            <h1 className='titulo-principalcomo'>Como Funciona</h1>
            <div className="Cartoes">
                <div className="cartao">
                    <img src={localizaoicon} alt="iconedelocalizaçao" />
                    <h2>Encontre um posto</h2>
                    <p>Busque Por Hemocentros aqui no Guia do Sangue</p>
                </div>
                <div className="cartao">
                    <img src={calendaricon} alt="iconedelocalizaçao" />
                    <h2>Agende sua doação</h2>
                    <p>Faça o agendamento pelo Guia do Sangue</p>
                </div>
                <div className="cartao">
                    <img src={hearticon} alt="iconedelocalizaçao" />
                    <h2>Doe e Salve Vidas</h2>
                    <p>Simples, rapido e transformador.</p>
                </div>
            </div> 
        </div>
    )
}