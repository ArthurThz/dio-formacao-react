import { Container, NameText, Progress, UserPicture } from "./styles";
import { IUserInfo } from "./types";
const UserInfo = ({ nome, imagem, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={imagem} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export default UserInfo;
