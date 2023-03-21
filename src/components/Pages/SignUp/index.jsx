import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../../services/api";

import Header from "../../Header/index";
import Input from "../../Input";
import Button from "../../Button/Index";

import { MdLock, MdEmail, MdPerson } from "react-icons/md";
import {
  Title,
  Column,
  Container,
  Row,
  Wrapper,
  Subtitle,
  Policy,
} from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo três caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const SignUp = () => {
  const [userName, setUserName] = useState("");

  const handleUserName = (event) => {
    let { value } = event.target;
    setUserName(value);
  };

  const [userEmail, setUserEmail] = useState("");
  const handleUserEmail = (event) => {
    let { value } = event.target;
    setUserEmail(value);
  };

  const [userPassword, setUserPassword] = useState("");
  const handleUserPassword = (event) => {
    let { value } = event.target;
    setUserPassword(value);
  };

  const cleanInputs = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const Cadastrar = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: userName,
      email: userEmail,
      password: userPassword,
    };
    api.post("/users", newUser);
    cleanInputs();
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            técnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <Title>Comece agora grátis</Title>
            <Subtitle>Crie sua conta e make the change._</Subtitle>
            <form onSubmit={Cadastrar}>
              <Input
                leftIcon={<MdPerson />}
                control={control}
                name="name"
                placeholder="Nome"
                onChange={handleUserName}
                value={userName}
              />
              <Input
                leftIcon={<MdEmail />}
                control={control}
                name="email"
                placeholder="Email"
                onChange={handleUserEmail}
                value={userEmail}
              />
              <Input
                leftIcon={<MdLock />}
                control={control}
                name="password"
                placeholder="Senha"
                onChange={handleUserPassword}
                value={userPassword}
                type="password"
              />
              <Button
                type="submit"
                title="Criar minha conta"
                variant="secondary"
              />
            </form>
          </Wrapper>
          <Row>
            <Policy>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
              <div>
                Já tenho Conta. <span>Fazer Login</span>
              </div>
            </Policy>
          </Row>
        </Column>
      </Container>
    </>
  );
};

export default SignUp;
