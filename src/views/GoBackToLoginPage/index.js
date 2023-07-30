import { Header } from "../LoginPage/LoginPage.styles";
import { FormUserArea, Image } from "../forms.styles";
import { UnLoggedPageSection } from "../views.styles";
import Logo from '../../assets/images/logo_pontua_white.png'
import BuildingImage from '../../assets/images/bro.png'
import GoBackSection from "./GoBackSection/GobackSection";

export default function GoBackToLoginPage() {
  return (
    <UnLoggedPageSection>
    <Header>
      <img src={Logo} alt="logo" />
    </Header>
    <FormUserArea>
      <Image src={BuildingImage} alt="building" />
      <GoBackSection />
    </FormUserArea>
  </UnLoggedPageSection>
  )
}