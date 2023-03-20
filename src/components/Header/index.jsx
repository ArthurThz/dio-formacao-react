import logo from "../../assets/logo-dio.png";

import {
  Container,
  Column,
  Row,
  Input,
  Menu,
  MenuRight,
  UserPicture,
  Wrapper,
  BuscarInputContainer,
} from "./styles";

import Button from "../Button/Index";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo da dio" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
