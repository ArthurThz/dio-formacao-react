import { useNavigate } from "react-router-dom";
import banner from "../../../assets/banner.png";

import Button from "../../Button/Index";
import Header from "../../Header";

import { Title, Container, TextContent, TitleHighLight } from "./styles";
const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
