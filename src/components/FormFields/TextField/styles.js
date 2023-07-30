import { TextField } from "@mui/material";
import { styled } from "styled-components";


export const CustomTextField = styled(TextField)`
  &.MuiFormControl-root {
    margin: 10px 0;
    padding: 0 36px;
    width: 310px;
  }
  fieldset {
    border-width: 0.7px;
    border-color: var(--blue-500);
  }
  .MuiInputBase-root  {
    border-radius: 10px;
    input {
      color: var(--blue-500);
      font-size: 16px;
      font-weight: 700;
      background-color: var(--white);
      letter-spacing: -1.04px;
      &::placeholder {
        color: var(--gray-400);
      }
    }
  }
`