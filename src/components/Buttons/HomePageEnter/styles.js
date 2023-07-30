import { Button } from "@mui/material";
import { styled } from "styled-components";

export const CustomButton = styled(Button)`
  width: 88px;
  height: 44px;
  float: right;
  &.MuiButtonBase-root {
    border-radius: 8px;
    text-transform: initial;
    margin: 0 36px;
    padding: 0 36px;
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-150);
    font-weight: 700;
    box-shadow: none;
    background-color: var(--blue-800);
    &:hover {
      background-color: var(--blue-800);
    }
  }
`