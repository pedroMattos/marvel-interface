import { PageSection } from "../views.styles"
import Sidebar from "../Sidebar"
import TabWrapper from "./TabWrapper"
import useProfileAgentData from "./hooks/useProfileAgentData"
import Loading from "../../components/Loading"


function ProfilePage() {
  const { agent, isloading } = useProfileAgentData()

  return (
    <PageSection>
      <Sidebar />
      {!isloading ? <TabWrapper agentData={agent} /> : <Loading />}
    </PageSection>
  )
}

export default ProfilePage
