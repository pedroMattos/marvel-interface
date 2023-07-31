import { Button, Pagination } from "@mui/material";
import { styled } from "styled-components";

export const CustomPagination = styled(Pagination)`
  ul {
    justify-content: center;
    .MuiButtonBase-root {
      margin: 0;
      border-radius: 0;
      color: var(--blue-600);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      &.MuiPaginationItem-page {
        width: 40px;
      }
      height: 40px;
    }
  }
`
export const BackButton = styled(Button)`
  svg {
    ${({ $isNext }) => $isNext ? 'transform: rotate(180deg);' : ''}
  }
`
