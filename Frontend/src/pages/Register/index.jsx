import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import { api } from "../../services/api";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { CpfInput } from "../../components/Input/cpfInput";
import { DateInput } from "../../components/Input/dateInput";

import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

export function Register() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    if (!name || !birthDate || !cpf) {
      return alert("Preencha todos os campos.");
    }
    await api
      .post("/register", { name, birthDate, cpf })
      .then(() => {
        alert("usuario cadastrado");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("erro ao cadastrar usuário");
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
            onChange={(event) => setName(event.target.value)}
          />
          <DateInput onChange={(date) => setBirthDate(date)} />
          <CpfInput onChange={(cpf) => setCpf(cpf)} />
          <button
            className="register-button"
            onClick={(event) => handleRegister(event)}
          >
            Cadastrar
          </button>
        </Form>
      </Section>

      <Footer></Footer>
    </Container>
  );
}
