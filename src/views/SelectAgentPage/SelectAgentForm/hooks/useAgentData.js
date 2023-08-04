import { useEffect, useState } from "react";
import getAllCharacters from "../../../../services/getAllCharacters";
import debounce from "lodash.debounce";
const PER_PAGE = 10
export default function useAgentData() {
  const [agents, setAgents] = useState(null)
  const [totalItems, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [pageOffset, setPageOffset] = useState(1)

  const handlePageChange = (event, page) => {
    const offset = (page - 1) * PER_PAGE
    reFetchAgents(offset)
    setIsLoading(true)
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    const isNoEmpty = !!searchTerm.trim()
    const startSearch = debounce(() => {
      if (isNoEmpty) {
        reFetchAgents(0, searchTerm, false)
        return
      }

      reFetchAgents(pageOffset, searchTerm)
    }, 1000)

    startSearch()
  }

  const reFetchAgents = async (offset, searchTerm, changeOffset = true) => {
    const { results, total } = await getAllCharacters(offset, searchTerm)
    changeOffset && setPageOffset(offset)
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

  return { isLoading, agents, totalItems, handlePageChange, handleSearch }
}