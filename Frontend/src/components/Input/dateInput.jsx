import { useState } from 'react'
import { Container } from './styles';
import { FiCalendar } from 'react-icons/fi'

export function DateInput({date, onChange}){

  const [formattedDate, setDate] = useState(date ?? '')

  function handleDateChange(event){
    const newDate = event.target.value
    setDate(newDate)
    onChange(newDate)
  }
  
  return(
    <Container>
      <FiCalendar size={20}/>
      <input onChange={handleDateChange} type='date' value={formattedDate}/>
    </Container>
  )
}