import { Divider } from "@mui/material";
import { styled } from "styled-components";

export const CardsAreaWrapper = styled.div`
  padding: 20px 27px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 470px;
`

export const PaginatorArea = styled.div`
  margin-top: 12px;
`

export const CustomDivider = styled(Divider)`
&.MuiDivider-root {
  margin-bottom: 12px;
  border-color: var(--divider-color);
}
`