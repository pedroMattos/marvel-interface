import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PowersTab from "../Tabs/PowersTab";
import GeneralTab from "../Tabs/GeneralTab";
import TeamsTab from "../Tabs/TeamsTab";
import { AgentName, Emptyheader, PageTitle, TabContainer, TitleWrapper } from "../ProfilePage.styles";
import SpeciesTab from "../Tabs/SpeciesTab";
import AuthorsTab from "../Tabs/AuthorsTab";
import { PageInfo } from "../../views.styles";

export default function TabWrapper({ agentData }) {
  const [value, setValue] = useState(0)

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageInfo>
      <Emptyheader />
      <TabContainer>
        <TitleWrapper>
          <PageTitle $highLightText='/'>Perfil </PageTitle>
          <AgentName>{agentData.name}</AgentName>
        </TitleWrapper>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Visão Geral" {...a11yProps(0)} />
            <Tab label="Teams" {...a11yProps(1)} />
            <Tab label="Powers" {...a11yProps(2)} />
            <Tab label="Species" {...a11yProps(3)} />
            <Tab label="Authors" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <GeneralTab value={value} index={0}>
          Tab de visões gerais
        </GeneralTab>
        <TeamsTab value={value} index={1}>
          Tab de times
        </TeamsTab>
        <PowersTab value={value} index={2}>
          Tab de poderes
        </PowersTab>
        <SpeciesTab value={value} index={3}>
          Tab de Especies
        </SpeciesTab>
        <AuthorsTab value={value} index={4}>
          Tab de autores
        </AuthorsTab>
      </TabContainer>
    </PageInfo>
  )
}