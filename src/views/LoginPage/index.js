import { FormUserArea, UnLoggedPageSection } from "../views.styles";
import { Header } from "./LoginPage.styles";
import Logo from '../../assets/images/logo_pontua_white.png'
import BuildingImage from '../../assets/images/bro.png'
import LoginForm from "./LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <UnLoggedPageSection>
      <Header>
        <img src={Logo} alt="logo" />
      </Header>
      <FormUserArea>
        <img src={BuildingImage} alt="building" />
        <LoginForm />
      </FormUserArea>
    </UnLoggedPageSection>
  )
}