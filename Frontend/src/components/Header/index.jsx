import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img
        src="https://www.mocx.com.br/media/site/img/mocx-logo.png"
        alt="logo MOCX"
      />
      <nav>
        <a href="/"><button>Cadastrar</button></a>
        <a href="/list"><button>Registros</button></a>
      </nav>
    </Container>
  );
}
