import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PowersTab from "../Tabs/PowersTab";
import GeneralTab from "../Tabs/GeneralTab";
import TeamsTab from "../Tabs/TeamsTab";
import { AgentName, CustomTabs, Emptyheader, ListGroup, ListItem, PageTitle, TabBox, TabContainer, TitleWrapper } from "../ProfilePage.styles";
import SpeciesTab from "../Tabs/SpeciesTab";
import AuthorsTab from "../Tabs/AuthorsTab";
import { PageInfo } from "../../views.styles";
import AgentProfileCard from "../../../components/Cards/AgentProfileCard";

export default function TabWrapper({ agentData }) {
  const [value, setValue] = useState(0)

  function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <PageInfo>
      <Emptyheader />
      <TabContainer>
        <TitleWrapper>
          <PageTitle $highLightText='/'>Perfil </PageTitle>
          <AgentName>{agentData.name}</AgentName>
        </TitleWrapper>
        <TabBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Visão Geral" {...tabProps(0)} />
            <Tab label="Teams" {...tabProps(1)} />
            <Tab label="Powers" {...tabProps(2)} />
            <Tab label="Species" {...tabProps(3)} />
            <Tab label="Authors" {...tabProps(4)} />
          </CustomTabs>
        </TabBox>
        <GeneralTab value={value} index={0}>
          <AgentProfileCard
            agentDescription={agentData.description}
            agentImage={`${agentData.thumbnail.path}.${agentData.thumbnail.extension}`}
            agentName={agentData.name}
          />
        </GeneralTab>
        <TeamsTab value={value} index={1}>
          <ListGroup>
            <ListItem>Avengers</ListItem>
            <ListItem>Defenders</ListItem>
            <ListItem>Fantastic Four</ListItem>
            <ListItem>Future Foundation</ListItem>
            <ListItem>Heroes for Hire</ListItem>
            <ListItem>The New Avengers</ListItem>
            <ListItem>X-Mansion</ListItem>
          </ListGroup>
        </TeamsTab>
        <PowersTab value={value} index={2}>
          <ListGroup>
            <ListItem>Agility</ListItem>
            <ListItem>Genius</ListItem>
            <ListItem>Genius-level intellect</ListItem>
            <ListItem>Precognitive</ListItem>
            <ListItem>Precognitive spider-sense</ListItem>
            <ListItem>Speed</ListItem>
            <ListItem>Spider-sense</ListItem>
            <ListItem>Superhuman strength</ListItem>
          </ListGroup>
        </PowersTab>
        <SpeciesTab value={value} index={3}>
          <ListGroup>
            <ListItem>Mutate</ListItem>
          </ListGroup>
        </SpeciesTab>
        <AuthorsTab value={value} index={4}>
          <ListGroup>
            <ListItem>Stan Lee</ListItem>
            <ListItem>Steve Ditko</ListItem>
          </ListGroup>
        </AuthorsTab>
      </TabContainer>
    </PageInfo>
  )
}