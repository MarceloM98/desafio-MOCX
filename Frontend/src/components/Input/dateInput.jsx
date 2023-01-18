import { useState } from "react";
import { Container } from "./styles";
import { FiCalendar } from "react-icons/fi";

export function DateInput({ date, onChange }) {
  const [formattedDate, setDate] = useState(formatInitialDate());
  const [inputType, setInputType] = useState("text");

  function formatInitialDate() {
    return date ? new Date(date).toLocaleDateString("pt-BR") : "";
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    onChange(newDate);
  }

  function handleInputTypeChange(event) {
    if (inputType == "text") {
      setInputType("date");
    } else if (inputType == "date" && event.target.value == "") {
      setInputType("text");
    }
  }

  return (
    <Container>
      <FiCalendar size={20} />
      <input
        max="2023-01-01"
        min="1900-01-01"
        onChange={handleDateChange}
        placeholder="Data de nascimento"
        type={inputType}
        onBlur={handleInputTypeChange}
        onFocus={handleInputTypeChange}
        value={formattedDate}
      />
    </Container>
  );
}
