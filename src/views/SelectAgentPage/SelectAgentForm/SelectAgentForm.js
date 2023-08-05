import { connect } from "react-redux";
import HomePageEnter from "../../../components/Buttons/HomePageEnter";
import SelectWithThumb from "../../../components/Selects/SelectWithThumb";
import { FormContainer, FormTitle, InfoTextForm } from "../../forms.styles";
import useAgentData from "./hooks/useAgentData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectAgentForm({ dispatch }) {
  const navigate = useNavigate()
  const { agents, isLoading } = useAgentData()
  const [selectedAgent, setSelectedAgent] = useState(null)

  const handleSelectAgent = () => {
    navigate('/')
    dispatch({ type: 'CREATE_DEFAULT_AGENT', payload: selectedAgent })
  }
  return (
    <FormContainer>
    <FormTitle $highLightText=".">Selecione o seu agente mais legal</FormTitle>
    <InfoTextForm>
      Tenha a visão do seu agente
    </InfoTextForm>
    {!isLoading && <SelectWithThumb setSelectedAgent={setSelectedAgent} selectedAgent={selectedAgent} listData={agents} />}
    <HomePageEnter onClick={handleSelectAgent} />
  </FormContainer>
  )
}

export default connect()(SelectAgentForm)
