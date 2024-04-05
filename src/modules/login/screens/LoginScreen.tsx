import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.jpg" />
            <Input label="Usuário" />
            <Input label="Senha" />
          </LimitedContainer>
        </ContainerLogin>

        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
