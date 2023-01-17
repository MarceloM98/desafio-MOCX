import { Container } from './styles'


export function Card({person, onUpdateClick, onDeleteClick}){

  return(
    <Container>
      <div className="info">
        <p>{person.name}</p>
        <p>{person.birthDate}</p>
        <p>{person.cpf}</p>
      </div>
      <div className='controls'>
        <button onClick={onUpdateClick}>U</button>
        <button onClick={onDeleteClick}>X</button>
      </div>
    </Container>
  )
}