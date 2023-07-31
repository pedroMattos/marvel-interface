import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  gap: 15px;
  background-color: var(--gray-100);
  min-width: 238px;
  height: 150px;
  max-width: 100%;
  flex: 1;
  border-radius: 15px;
  `

export const CardThumb = styled.figure`
  margin: 14px 0 17px 10px;
  border-radius: 10px;
  overflow: hidden;
  width: 83px;
  height: 119px;
  img {
    width: 83px;
    height: 119px;
    object-fit: cover;
  }
`

export const CardInfo = styled.p`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.36px;
  color: var(--black);
  margin: 0;
`

export const CardInfoArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardInfoTitle = styled.p`
  margin-bottom: 10px;
  margin-top: 14px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.48px;
  color: var(--black);
`