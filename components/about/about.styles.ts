import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0 auto;
  padding: 72px 40px 40px;

  >span:first-of-type, h1 {
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  >p {
    font-family: 'Montserrat', sans-serif;
    white-space: pre-wrap;
    width: 100%;
    line-height: 1.7;
  }

  @media (max-width: 1280px) {
    width: 860px;
  }
  @media (max-width: 860px) {
    width: 620px;
    padding-bottom: 115px;
  }

  @media (max-width: 620px) {
    width: 320px;
    > span:first-of-type, > h1 {
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
  align-items: center;

  @media (max-width: 860px) {
    width: 360px;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`

export const CertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

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

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 8px 16px;
    background-color: rgba(255,255,255,0.7);
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
`