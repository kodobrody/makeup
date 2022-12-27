import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1280px;
  max-width: 100%;
  padding: 0 40px;
  flex-direction: column;
  margin: 0 auto;

  >a:last-of-type {
    display: flex;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #3b3030;
    padding: 12px 8px;
    border-radius: 4px;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-self: flex-end;
  }

  @media (max-width: 1280px) {
    width: 860px;
  }

  @media (max-width: 860px) {
    width: 440px;
    padding-bottom: 96px;
  }
`

type OpinionWrapperProps = {
  isRight: boolean;
}

export const OpinionWrapper = styled.div<OpinionWrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 32px;

  ${({ isRight }) => isRight && css`
    text-align: right;
    align-self: flex-end;
  `}

  p {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  a, span {
    text-decoration: none;
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
`