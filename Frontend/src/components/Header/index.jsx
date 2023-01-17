import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img
        src="https://www.mocx.com.br/media/site/img/mocx-logo.png"
        alt="logo MOCX"
      />
      <nav>
        <a href="/">Cadastrar</a>
        <a href="/list">Registro</a>
      </nav>
    </Container>
  );
}
