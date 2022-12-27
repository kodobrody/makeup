import styled, { css } from "styled-components";

type WrapperProps = {
  isPage: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0 auto;
  padding: 72px 40px 40px;

  >span {
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  >a {
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

  ${({ isPage }) => isPage && css`
    padding: 132px 40px 40px;
    >
    span {
      font-size: 64px;
    }
    > a {
      display: none;
    }
    @media (max-width: 860px) {
      padding-bottom: 115px;
    }
  `}
  ${({ isPage }) => !isPage && css`
    
  `}

  @media (max-width: 1280px) {
    max-width: 860px;
    width: 100%;
  }

  @media (max-width: 620px) {
    > span {
      font-size: 32px !important;
    }
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
  
  img {
    width: 360px;
    height: 480px;
    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    justify-content: center;
  }

  @media (max-width: 440px) {
    img {
      width: 100%;
      height: initial;
    }
  }
`

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #dedcdc;
  width: 240px;
  height: 300px;
  align-items: center;
  justify-content: center;

  span:first-of-type {
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  span:last-of-type {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
`