import { useParams } from "react-router-dom"
import { PageSection } from "../views.styles"
import Sidebar from "../Sidebar"

export default function ProfilePage() {
  const { id } = useParams()

  return (
    <PageSection>
      <Sidebar />
    </PageSection>
  )
}