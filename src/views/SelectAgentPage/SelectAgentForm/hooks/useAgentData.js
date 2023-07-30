import { useEffect, useState } from "react";
import getAllCharacters from "../../../../services/getAllCharacters";

export default function useAgentData() {
  const [agents, setAgents] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchAgents = async () => {
    const fetchedAgents = await getAllCharacters()
    setAgents(fetchedAgents)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  return { isLoading, agents }
}