import { CircularProgress } from "@mui/material";
import AgentCard from "../../../components/Cards/AgentCard";
import useAgentData from "../../SelectAgentPage/SelectAgentForm/hooks/useAgentData";
import { PageInfo } from "../../views.styles";
import SearchBar from "../SearchBar";
import { CardsAreaWrapper, CustomDivider, PaginatorArea } from "./SearchAndCards.styles";
import PaginationSelector from "../../../components/PaginationSelector";

export default function SearchAndCards() {
  const { agents, isLoading, totalItems, handlePageChange } = useAgentData()
  const totalItemsPerPage = 10
  const totalPages = parseInt(totalItems / totalItemsPerPage)
  return (
    <PageInfo>
      <SearchBar />
      <CardsAreaWrapper>
        {!isLoading ? agents.map((agent) => (<AgentCard agentData={agent} />)) : <CircularProgress />}
      </CardsAreaWrapper>
      <PaginatorArea>
        <CustomDivider />
        <PaginationSelector count={totalPages} onChange={handlePageChange} />
      </PaginatorArea>
    </PageInfo>
  )
}