import { MenuItem, Select } from "@mui/material";
import { styled } from "styled-components";

export const CustomSelect = styled(Select)`
  width: 310px;
  margin: 10px 36px 16px;
  &.MuiInputBase-root {
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    border-radius: 8px;
    .MuiOutlinedInput-input {
      display: flex;
      padding: 8.5px 14px;
      align-items: center;
      gap: 8px;
      p {
        margin: 0;
      }
      svg {
        display: none;
      }
    }
    svg {
      top: 10px;
    }
  }
  
  fieldset {
    border-color: var(--gray-300);
    height: 44px;
  }
`

export const EmptyListItem = styled(MenuItem)`
  &.MuiMenuItem-root&.MuiMenuItem-root {
    color: var(--gray-500);
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    gap: 8px;
    svg {
      display: block;
    }
  }
`

export const CustomItem = styled(MenuItem)`
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  &.MuiMenuItem-root {
    ${({ $withoutPadding }) => $withoutPadding ? 'padding: 0;' : ''}
    gap: 8px;

    &.Mui-selected {
      background-color: var(--gray-100);
    }
    p {
      color: var(--gray-900);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin: 0;
      flex: 1;
    }
  }
`
