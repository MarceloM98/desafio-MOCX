import { FiKey } from "react-icons/fi";
import { useState } from "react";

import { Container } from "./styles";
import { formatCpf } from "../../helpers/cpfFormatter";

export function CpfInput({ cpf, onChange }) {
  const [formattedCpf, setCpf] = useState(cpf ?? "");

  function handleCpfChange(event) {
    const newFormattedCpf = formatCpf(event.target.value);

    setCpf(newFormattedCpf);
    onChange(newFormattedCpf.replace(/[^0-9]/g, ""));
  }

  return (
    <Container>
      <FiKey size={20} />
      <input
        onChange={handleCpfChange}
        placeholder="CPF"
        type="text"
        value={formattedCpf}
      />
    </Container>
  );
}
