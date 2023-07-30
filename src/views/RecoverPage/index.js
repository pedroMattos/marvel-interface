import { Header } from "../LoginPage/LoginPage.styles";
import { FormUserArea, Image } from "../forms.styles";
import { UnLoggedPageSection } from "../views.styles";
import Logo from '../../assets/images/logo_pontua_white.png'
import BuildingImage from '../../assets/images/bro.png'
import RecoverForm from "./RecoverForm/RecoverForm";

export default function RecoverPage() {
  return (
    <UnLoggedPageSection>
    <Header>
      <img src={Logo} alt="logo" />
    </Header>
    <FormUserArea>
      <Image src={BuildingImage} alt="building" />
      <RecoverForm />
    </FormUserArea>
  </UnLoggedPageSection>
  )
}