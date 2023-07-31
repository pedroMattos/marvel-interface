import { ListItem } from "@mui/material";
import { styled } from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 256px;
  height: 100vh;
  background-color: var(--white);
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`

export const SidebarHeader = styled.div`
  img {
    width: 104px;
    height: 26px;
    object-fit: cover;
  }
  border-bottom: 1px solid var(--divider-color);
  height: 20px;
  padding: 20px 26px;
`

export const SidebarBody = styled.div`

`

export const SidebarListItem = styled(ListItem)`
  &.MuiListItem-root {
    color: var(--black);
    padding: 0 20px;
    height: 34px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.39px;
    svg path {
      stroke: var(--black);
    }
    &.active-page {
      svg path {
        stroke: var(--orange-500);
      }
      .MuiButtonBase-root {
        color: var(--orange-500);
      }
    }
    .MuiButtonBase-root {
      .MuiListItemIcon-root{
        justify-content: center;
      }
      border-radius: 10px;
      padding: 0;
      &:hover {
        background-color: var(--gray-background);
      }
    }
  }
`