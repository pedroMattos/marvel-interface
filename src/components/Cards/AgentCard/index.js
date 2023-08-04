import { useNavigate } from "react-router-dom";
import { CardInfo, CardInfoArea, CardInfoTitle, CardThumb, CardWrapper } from "./AgentCard.styles";
import { connect } from "react-redux";

function AgentCard({ agentData, dispatch }) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    dispatch({ type: 'UPDATE_DATA', payload: agentData })
    navigate(`agent/${agentData.id}`)
  }

  return (
    <CardWrapper onClick={handleNavigate}>
      <CardThumb>
        <img src={`${agentData.thumbnail.path}.${agentData.thumbnail.extension}`} alt={agentData.name} />
      </CardThumb>
      <CardInfoArea>
        <CardInfoTitle>{agentData.name}</CardInfoTitle>
        <CardInfo>{!!agentData.description.trim() ? agentData.description : 'Agente sem descrição' }</CardInfo>
      </CardInfoArea>
    </CardWrapper>
  )
}

export default connect()(AgentCard)