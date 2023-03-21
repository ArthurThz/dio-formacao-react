import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../Button/Index";
import Header from "../../Header";
import Input from "../../Input";

import { api } from "../../../services/api";
import { IFormData } from "./types";

import { MdEmail, MdLock } from "react-icons/md";
import {
  Title,
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
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

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Usuário ou senha inválida");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro!</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change!</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                errorMessage={errors?.email?.message}
              />
              <Input
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                errorMessage={errors?.password?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
