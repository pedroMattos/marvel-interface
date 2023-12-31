import { styled } from "styled-components";
import { FormTitle } from "../forms.styles";
import { Box, Tabs } from "@mui/material";

export const PageTitle = styled(FormTitle)`
  padding: 0;
  margin-bottom: 0;
`

export const TabContainer = styled.div`
  padding: 20px 27px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const AgentName = styled.p`
  margin: 0;
  font-size: 24px;
  color: var(--gray-500);
  letter-spacing: -0.72px;
  font-weight: 300;
`

export const Emptyheader = styled.div`
  height: 59px;
  width: 100%;
  border: 1px solid var(--divider-color);
`

export const ListItem = styled.li`
  font-szie: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--blue-200);
`

export const ListGroup = styled.ul`
  margin: 0;
  padding: 0;
`

export const CustomTabs = styled(Tabs)`
.MuiButtonBase-root.MuiTab-root {
    color: var(--gray-500);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`

export const TabBox = styled(Box)`
  .MuiTabs-indicator {
    background-color: var(--blue-800);
  }
`
