import { SidebarBody, SidebarHeader, SidebarListItem, SidebarWrapper } from "./Sidebar.styles";
import Logo from '../../assets/images/logo_pontua_blue.png'
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "../../components/Icons/MenuIcon";
import UserIcon from "../../components/Icons/UserIcon";
import BackArrowIcon from "../../components/Icons/BackArrowIcon";
import { useResolvedPath } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useResolvedPath()
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <img src={Logo} alt="logo" />
      </SidebarHeader>
      <SidebarBody>
        <List>
          <SidebarListItem disablePadding className={pathname === '/' ? 'active-page' : ''}>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </SidebarListItem>
          <SidebarListItem disablePadding className={pathname === '/profile' ? 'active-page' : ''}>
            <ListItemButton>
              <ListItemIcon>
                <UserIcon width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </SidebarListItem>
        </List>
        <Divider />
        <List>
          <SidebarListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BackArrowIcon width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </SidebarListItem>
        </List>
      </SidebarBody>
    </SidebarWrapper>
  )
}