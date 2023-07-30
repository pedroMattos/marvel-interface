import { styled } from "styled-components";

export const UnLoggedPageSection = styled.section`
  background-color: var(--blue-800);
  height: 100vh;
  width: 100vw;
`

export const FormUserArea = styled.div`
  display: flex;
  gap: 140px;
  justify-content: center;
`

export const FormContainer = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  width: 380px;
  height: 433px;
  padding: 49px 33px;
`

export const FormTitle = styled.p`
  color: var(--blue-600);
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.34px;
  margin: 0 0 16px;
  ${({ $highLightText }) => $highLightText ? `
  &::after {
    content: '${$highLightText}';
    color: var(--orange-500);
    position: aboslute;
  }
` : ''}
`
