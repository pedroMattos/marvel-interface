import { CircularProgress } from "@mui/material";
import AgentCard from "../../../components/Cards/AgentCard";
import useAgentData from "../../SelectAgentPage/SelectAgentForm/hooks/useAgentData";
import { PageInfo } from "../../views.styles";
import SearchBar from "../SearchBar";
import { CardsAreaWrapper } from "./SearchAndCards.styles";

export default function SearchAndCards() {
  const { agents, isLoading } = useAgentData()
  return (
    <PageInfo>
      <SearchBar />
      <CardsAreaWrapper>
        {!isLoading ? agents.map((agent) => (<AgentCard agentData={agent} />)) : <CircularProgress />}
      </CardsAreaWrapper>
    </PageInfo>
  )
}