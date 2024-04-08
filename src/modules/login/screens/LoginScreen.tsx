import React from "react";

import Button from "../../../shared/components/buttons/button/Button";
import SVGLogo from "../../../shared/components/icons/SVGLogo";
import Input from "../../../shared/components/inputs/input/Input";
import { useRequests } from "../components/hooks/useRequests";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [loginData, setLoginData] = React.useState({});
  const { postRequest, loading } = useRequests();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleLogin = () => {
    const { ...rest }: string = loginData;
    postRequest("http://localhost:8080/auth", {
      ...rest,
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
            <Button
              loading={loading}
              type="primary"
              margin="62px 0 16px 0"
              onClick={handleLogin}
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
