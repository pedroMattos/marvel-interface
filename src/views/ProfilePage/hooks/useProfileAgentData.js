import { useEffect, useState } from "react";
import getCharacterById from "../../../services/getCharacterById";
import { useParams } from "react-router-dom";

export default function useProfileAgentData() {
  const { id } = useParams()
  const [agent, setAgent] = useState(null)
  const [isloading, setIsloading] = useState(true)

  const fetchAgent = async (id) => {
    const { results } = await getCharacterById(id)
    setAgent(results.at(0))
    setIsloading(false)
  }

  useEffect(() => {
    fetchAgent(id)
  }, [id])

  return { agent, isloading }
}