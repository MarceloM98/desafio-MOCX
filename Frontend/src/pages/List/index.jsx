import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { FormModal } from "../../components/FormModal";
import { Header } from "../../components/header";
import { PageTitle } from "../../components/PageTitle";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export function List() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [registerId, setRegisterId] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    async function fetchPerson() {
      await fetch();
    }
    fetchPerson();
  }, []);

  async function fetch() {
    const response = await api.get("/register");
    setRegisters(response.data);
  }

  function deleteRegister(id) {
    async function deleteById() {
      await api.delete("/register", { params: { id: id } });
      await fetch();
    }
    const isConfirmed = confirm("excluir usuário?");
    if (!isConfirmed) {
      return;
    }
    deleteById();
  }

  function openModal(id, username, userBirthDate) {
    setIsOpen(true);
    setName(username);
    setBirthDate(userBirthDate);
    setRegisterId(id);
  }

  async function updateModal() {
    if (birthDate > "2023-01-17" || birthDate < "1900-01-01") {
      return alert("Data de nascimento invalida");
    }
    const isConfirmed = confirm("Atualizar usuário?");
    if (!isConfirmed) return;
    closeModal();
    updateRegister();
  }

  async function closeModal() {
    setIsOpen(false);
  }

  function updateRegister() {
    async function updateById() {
      await api.put(`/register/${registerId}`, {
        name: name,
        birthDate: birthDate,
      });
      await fetch();
    }
    updateById();
  }

  return (
    <Container>
      <FormModal
        modalIsOpen={modalIsOpen}
        updateModal={updateModal}
        closeModal={closeModal}
        setName={setName}
        setBirthDate={setBirthDate}
        currentName={name}
        currentBirthDate={birthDate}
      ></FormModal>
      <div>
        <Header></Header>
        <PageTitle title="Registro de cadastros"></PageTitle>
      </div>

      <main>
        <div className="cards-wrapper">
          {registers.map((person) => (
            <div key={String(person.id)}>
              <Card
                person={person}
                onUpdateClick={() =>
                  openModal(person.id, person.name, person.birthDate)
                }
                onDeleteClick={() => deleteRegister(person.id)}
              ></Card>
            </div>
          ))}
        </div>
      </main>

      <div>
        <Footer></Footer>
      </div>
    </Container>
  );
}
