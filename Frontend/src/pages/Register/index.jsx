import { useState } from "react";
import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { CpfInput } from "../../components/Input/cpfInput";
import { DateInput } from "../../components/Input/dateInput";

import { FiUser, FiKey, FiCalendar } from "react-icons/fi";
import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Register() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");

  function handleRegister() {
    if (!name || !birthDate || !cpf) {
      return alert("Preencha todos os campos.");
    }

    api
      .post("/register", { name, birthDate, cpf })
      .then(() => {
        alert("Usuário cadastrado");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>

      <Header></Header>

      <Section title="Cadastro de Pessoa">
        <Form>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
          <DateInput
            onChange={(date) => setBirthDate(date)}
          />
          <CpfInput
            onChange={(cpf) => setCpf(cpf)}
          />
          <button onClick={handleRegister}>Cadastrar</button>
        </Form>
      </Section>

      <Footer></Footer>

    </Container>
  );
}
