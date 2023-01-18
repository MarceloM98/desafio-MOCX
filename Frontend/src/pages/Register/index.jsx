import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import { api } from "../../services/api";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { CpfInput } from "../../components/Input/cpfInput";
import { DateInput } from "../../components/Input/dateInput";

import { Header } from "../../components/header";
import { PageTitle } from "../../components/PageTitle";
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
    if(birthDate > '2023-01-17' || birthDate < '1900-01-01'){
      return alert("Data de nascimento invalida")
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
      <div>
        <Header></Header>
        <PageTitle title='Cadastro'></PageTitle>
      </div>
        <main>
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
        </main>

      <Footer></Footer>
    </Container>
  );
}
