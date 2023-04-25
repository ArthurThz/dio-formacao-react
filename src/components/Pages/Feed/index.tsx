import Card from "../../Card";
import Header from "../../Header";
import UserInfo from "../../UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";
const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>#RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            nome="Arthur Theodoro"
            percentual={35}
            imagem="https://avatars.githubusercontent.com/u/89098685?s=400&u=c41d2a68f7568cfbe0bc39dee7b63a3d6ac66f52&v=4"
          />
          <UserInfo
            nome="Arthur Theodoro"
            percentual={35}
            imagem="https://avatars.githubusercontent.com/u/89098685?s=400&u=c41d2a68f7568cfbe0bc39dee7b63a3d6ac66f52&v=4"
          />
          <UserInfo
            nome="Arthur Theodoro"
            percentual={35}
            imagem="https://avatars.githubusercontent.com/u/89098685?s=400&u=c41d2a68f7568cfbe0bc39dee7b63a3d6ac66f52&v=4"
          />
          <UserInfo
            nome="Arthur Theodoro"
            percentual={35}
            imagem="https://avatars.githubusercontent.com/u/89098685?s=400&u=c41d2a68f7568cfbe0bc39dee7b63a3d6ac66f52&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
