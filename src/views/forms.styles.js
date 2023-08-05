import { styled } from "styled-components"

export const FormUserArea = styled.div`
  display: flex;
  gap: 140px;
  justify-content: center;
  margin-top: 70px;
`

export const FormContainer = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius);
  max-width: 380px;
  min-height: 433px;
`

export const FormTitle = styled.p`
  color: var(--blue-600);
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.34px;
  margin: 0 0 16px;
  padding: 49px 36px 0;
  ${({ $highLightText }) => $highLightText ? `
  &::after {
    content: '${$highLightText}';
    color: var(--orange-500);
    position: aboslute;
  }
` : ''}
`

export const InfoTextForm = styled.p`
  padding: 0 36px;
  font-size: 16px;
  color: var(--gray-500);
  line-height: 20.32px;
  letter-spacing: -1.04px;
  font-weight: 400;
  margin: 0;
`

export const Image = styled.img`
  max-height: 433px;
`