import { TextField } from "@mui/material";
import { styled } from "styled-components";


export const CustomTextField = styled(TextField)`
width: 100%;
  fieldset {
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-width: 1px;
    border-color: var(--divider-color);
    height: 65px;
  }
  .MuiInputBase-root  {
    svg {
      color: var(--gray-200);
    }
    padding: 22px 27px;
    input {
      color: var(--blue-500);
      font-size: 12px;
      font-weight: 500;
      background-color: var(--white);
      letter-spacing: -0.36px;
      padding: 0 16px;
      &::placeholder {
        color: var(--blue-200);
      }
    }
  }
`