import { Button } from "@mui/material";
import { styled } from "styled-components";

export const CustomButton = styled(Button)`
  width: 310px;
  height: 57px;
  &.MuiButtonBase-root {
    border-radius: 10px;
    text-transform: lowercase;
    margin: 0 36px;
    padding: 0 36px;
    font-size: 24px;
    letter-spacing: -1.56px;
    color: var(--gray-150);
    font-weight: 700;
    box-shadow: none;
    background-color: var(--blue-600);
    &:hover {
      background-color: var(--blue-600);
    }
  }
`