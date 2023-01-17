import { Container } from "./styles";
import { FiKey } from "react-icons/fi";
import { useState } from "react";

export function CpfInput({ cpf, onChange }) {
  const [formattedCpf, setCpf] = useState(cpf ?? "");

  function handleCpfChange(event) {
    const cpfMask = (value) => {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    };

    const newFormattedCpf = cpfMask(event.target.value);
    setCpf(newFormattedCpf);
    onChange(newFormattedCpf.replace(/[^0-9]/g, ""));
  }

  return (
    <Container>
      <FiKey size={20} />
      <input
        onChange={handleCpfChange}
        placeholder="cpf"
        type="text"
        value={formattedCpf}
      />
    </Container>
  );
}
