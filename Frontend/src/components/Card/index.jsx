import { Container } from './styles'


export function Card({name, birthDate, cpf, onDeleteClick}){

  return(
    <Container>
      <div className="info">
        <p>{name}</p>
        <p>{birthDate}</p>
        <p>{cpf}</p>
      </div>
      <div className='controls'>
        <button>U</button>
        <button onClick={onDeleteClick}>X</button>
      </div>
    </Container>
  )
}