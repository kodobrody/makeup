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

    > a {
      display: none;
    }
    > div {
      gap: 30px;
    }
    div > div {
      display: flex !important;
    }
    @media (max-width: 860px) {
      padding-bottom: 115px;
    }
  `}
  @media (max-width: 1280px) {
    width: 860px;

    div {
      div:nth-of-type(4) {
        display: none;
      }
    }
  }
  @media (max-width: 860px) {
    width: 620px;

    div {
      gap: 60px;
      justify-content: center;
      div:nth-of-type(4) {
        display: flex;
      }
    }
  }
  @media (max-width: 620px) {
    width: 320px;
    > span {
      font-size: 32px !important;
    }

    div {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
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
  background-color: white;

  span:first-of-type {
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  span:nth-of-type(2) {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
  span:last-of-type {
    margin-top: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }
`