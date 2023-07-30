import HomePageEnter from "../../../components/Buttons/HomePageEnter";
import SelectWithThumb from "../../../components/Selects/SelectWithThumb";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";
import useAgentData from "./hooks/useAgentData";

export default function SelectAgentForm() {
  const { agents, isLoading } = useAgentData()
  return (
    <FormContainer>
    <FormTitle $highLightText=".">Selecione o seu agente mais legal</FormTitle>
    <InfoTextForm>
      Tenha a visão do seu agente
    </InfoTextForm>
    {!isLoading && <SelectWithThumb listData={agents} />}
    <HomePageEnter />
  </FormContainer>
  )
}