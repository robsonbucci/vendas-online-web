import axios from "axios";
import React from "react";

import Button from "../../../shared/buttons/button/Button";
import SVGLogo from "../../../shared/icons/SVGLogo";
import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [loginData, setLoginData] = React.useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleLogin = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8080/auth",
      data: {
        email: loginData.email,
        password: loginData.password,
      },
    })
      .then((response) => {
        alert("logado com sucesso");
        console.log(response);
        return response.data;
      })
      .catch(() => {
        alert("usuário ou senha invalidos");
      });
  };

  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <SVGLogo />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input
              title="USUÁRIO"
              margin="32px 0 0 "
              id="email"
              onChange={handleChange}
              value={loginData.email}
            />
            <Input
              title="SENHA"
              margin="32px 0 0 "
              type="password"
              id="password"
              onChange={handleChange}
              value={loginData.password}
            />
            <Button type="primary" margin="62px 0 16px 0" onClick={handleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>

        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
