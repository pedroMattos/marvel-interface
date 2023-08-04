import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: fit-content;
  background-color: var(--white);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  margin-top: 30px;
  gap: 30px;
  padding-bottom: 70px;
`

export const AgentImage = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-top: 30px;
  margin-left: 30px;
`

export const InfoAgent = styled.div`
  display: flex;
  flex-direction: column;
`

export const AgentName = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.72px;
  color: var(--blue-600);
  margin: 0;
  padding-top: 30px;
`

export const AgentDescriptionComponent = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.48px;
  line-height: 24.56px;
  padding-bottom: 30px;
  margin-bottom: 0;
  color: var(--gray-450);
`
