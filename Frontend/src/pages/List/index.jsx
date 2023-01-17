import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/header";
import { PageTitle } from "../../components/PageTitle";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export function List() {
  const [registers, setPerson] = useState([]);

  useEffect(() => {
    async function fetchPerson() {
      await fetch()
    }
    fetchPerson();
  }, []);

  async function fetch() {
    const response = await api.get("/register");
    setPerson(response.data);
  }

  function teste2(id){
    async function teste(){
      await api.delete('/register', {params:{id:id}})
      await fetch()
    }
    teste()
  }

  return (
    <Container>
      <div className="teste1">
        <Header></Header>
        <PageTitle title="Registro de cadastros"></PageTitle>
      </div>

      <main>
        <div className="wrapper">
          {
            registers.map((person) => (
              <div key={String(person.id)}>
                <Card
                  name={person.name}
                  birthDate={person.birthDate}
                  cpf={person.cpf}
                  onDeleteClick={()=>teste2(person.id)}
                ></Card>
              </div>
            ))}
        </div>

      </main>

      <div className="teste2">
        <Footer></Footer>
      </div>
    </Container>
  );
}
