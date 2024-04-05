import React from "react";

import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [loginData, setLoginData] = React.useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleSubmit = () => {
    console.log(loginData);
  };

  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.jpg" />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input
              title="USUÁRIO"
              margin="32px 0 0 "
              id="username"
              onChange={handleChange}
              value={loginData.username}
            />
            <Input
              title="SENHA"
              margin="32px 0 0 "
              type="password"
              id="password"
              onChange={handleChange}
              value={loginData.password}
            />
            <Button
              type="primary"
              margin="62px 0 16px 0"
              onClick={handleSubmit}
            >
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
