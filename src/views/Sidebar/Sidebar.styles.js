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