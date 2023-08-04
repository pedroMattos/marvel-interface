import { AgentDescriptionComponent, AgentImage, AgentName, CardWrapper, InfoAgent } from "./AgentProfileCard.styles";

export default function AgentProfileCard({ agentName, agentImage, agentDescription }) {
  const description = !!agentDescription.trim() ? agentDescription : 'Agente sem descrição'

  return (
    <CardWrapper>
      <AgentImage src={agentImage} alt="Agent image" />
      <InfoAgent>
        <AgentName>{agentName}</AgentName>
        <AgentDescriptionComponent>{description}</AgentDescriptionComponent>
      </InfoAgent>
    </CardWrapper>
  )
}