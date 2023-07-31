import { useEffect, useState } from "react";
import getAllCharacters from "../../../../services/getAllCharacters";
const PER_PAGE = 10
export default function useAgentData() {
  const [agents, setAgents] = useState(null)
  const [totalItems, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const handlePageChange = (event, page) => {
    console.log(event.target.textContent, page)
    const offset = (page - 1) * PER_PAGE
    reFetchAgents(offset)
    setIsLoading(true)
  }

  const reFetchAgents = async (offset) => {
    const { results, total } = await getAllCharacters(offset)
    setAgents(results)
    setTotalItems(total)
    setIsLoading(false)
  }

  const fetchAgents = async () => {
    const { results, total } = await getAllCharacters()
    setAgents(results)
    setTotalItems(total)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  return { isLoading, agents, totalItems, handlePageChange }
}