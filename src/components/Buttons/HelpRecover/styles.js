import { Button } from "@mui/material";
import { styled } from "styled-components";

export const CustomButtom = styled(Button)`
  &.MuiButtonBase-root {
    border-radius: 10px;
    text-transform: initial;
    font-size: 11px;
    letter-spacing: -0.715px;
    color: var(--orange-700);
    font-weight: 400;
    box-shadow: none;
    background-color: var(--white);
    &:hover {
      background-color: var(--white);
    }
  }
`