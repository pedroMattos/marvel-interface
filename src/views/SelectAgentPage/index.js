import { Header } from "../LoginPage/LoginPage.styles";
import { FormUserArea, Image } from "../forms.styles";
import { UnLoggedPageSection } from "../views.styles";
import Logo from '../../assets/images/logo_pontua_white.png'
import BuildingImage from '../../assets/images/bro.png'
import SelectAgentForm from "./SelectAgentForm/SelectAgentForm";

export default function SelecAgent() {
  return (
    <UnLoggedPageSection>
    <Header>
      <img src={Logo} alt="logo" />
    </Header>
    <FormUserArea>
      <Image src={BuildingImage} alt="building" />
      <SelectAgentForm />
    </FormUserArea>
  </UnLoggedPageSection>
  )
}