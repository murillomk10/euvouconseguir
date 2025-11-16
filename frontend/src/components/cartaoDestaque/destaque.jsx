import './destaque.scss';

export default function CartaoDestaque( { imagem, titulo, descricao}) {
    return(
        <div className='cartaoDestaque'>

            <img src={imagem}/>
           
            <div className='info'>
                <h2>{titulo}</h2>
                <p >{descricao}</p>
            </div>

        </div>
    )
}