import { useParams } from "react-router-dom"
import { PageSection } from "../views.styles"
import Sidebar from "../Sidebar"
import TabWrapper from "./TabWrapper"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
}

function ProfilePage({ data }) {
  const { id } = useParams()

  return (
    <PageSection>
      <Sidebar />
      <TabWrapper agentData={data} />
    </PageSection>
  )
}

export default connect(mapStateToProps)(ProfilePage)
