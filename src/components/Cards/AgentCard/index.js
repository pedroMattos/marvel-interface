import { CardInfo, CardInfoArea, CardInfoTitle, CardThumb, CardWrapper } from "./AgentCard.styles";

export default function AgentCard({ agentData }) {
  console.log(agentData)
  return (
    <CardWrapper>
      <CardThumb>
        <img src={`${agentData.thumbnail.path}.${agentData.thumbnail.extension}`} alt={agentData.name} />
      </CardThumb>
      <CardInfoArea>
        <CardInfoTitle>{agentData.name}</CardInfoTitle>
        <CardInfo>p</CardInfo>
      </CardInfoArea>
    </CardWrapper>
  )
}