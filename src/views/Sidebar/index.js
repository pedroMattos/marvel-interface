import { SidebarBody, SidebarHeader, SidebarWrapper } from "./Sidebar.styles";
import Logo from '../../assets/images/logo_pontua_blue.png'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <img src={Logo} alt="logo" />
      </SidebarHeader>
      <SidebarBody>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </SidebarBody>
    </SidebarWrapper>
  )
}