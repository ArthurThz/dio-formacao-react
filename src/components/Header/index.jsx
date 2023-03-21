import logo from "../../assets/logo-dio.png";

import { useNavigate } from "react-router-dom";
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

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };
  const handleNavigateCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/89098685?s=400&u=c41d2a68f7568cfbe0bc39dee7b63a3d6ac66f52&v=4" />
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" onClick={handleNavigateLogin} />
              <Button title="Cadastrar" onClick={handleNavigateCadastro} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
