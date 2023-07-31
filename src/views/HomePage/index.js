import Sidebar from "../Sidebar";
import { PageSection } from "../views.styles";
import SearchAndCards from "./CardsDash/SearchAndCards";

export default function HomePage() {
  return (
    <PageSection>
      <Sidebar />
      <SearchAndCards />
    </PageSection>
  )
}