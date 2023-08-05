import { CustomDivider, SidebarBody, SidebarHeader, SidebarListItem, SidebarWrapper } from "./Sidebar.styles";
import Logo from '../../assets/images/logo_pontua_blue.png'
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "../../components/Icons/MenuIcon";
import UserIcon from "../../components/Icons/UserIcon";
import BackArrowIcon from "../../components/Icons/BackArrowIcon";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.data.defaultAgent,
  };
}

function Sidebar({ data }) {
  const { pathname } = useResolvedPath()
  const navigate = useNavigate()
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <img src={Logo} alt="logo" />
      </SidebarHeader>
      <SidebarBody>
        <List>
          <SidebarListItem disablePadding className={pathname === '/' ? 'active-page' : ''}>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemIcon>
                <MenuIcon width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </SidebarListItem>
          <SidebarListItem disablePadding className={pathname !== '/' ? 'active-page' : ''}>
            <ListItemButton onClick={() => navigate(`/agent/${data.id}`)}>
              <ListItemIcon>
                <UserIcon width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </SidebarListItem>
        </List>
        <CustomDivider />
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

export default connect(mapStateToProps)(Sidebar)
