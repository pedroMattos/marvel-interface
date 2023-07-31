import { CardInfo, CardInfoArea, CardInfoTitle, CardThumb, CardWrapper } from "./AgentCard.styles";

export default function AgentCard({ agentData }) {
  return (
    <CardWrapper>
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