import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
  padding: 96px 40px 32px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media  (max-width: 1280px) {
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  img {
    width: 360px;
    height: 360px;
    min-height: 360px;
    min-width: 360px;
  }

  @media  (max-width: 1280px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    max-width: 720px;
  }

  @media  (max-width: 440px) {
    img {
      min-height: 200px;
      min-width: 200px;
      max-height: 200px;
      max-width: 200px;
    }
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  span:first-of-type {
    font-size: 64px;
    font-weight: 700;
  }

  span:last-of-type {
    font-family: 'Montserrat', sans-serif;
    line-height: 2;
  }
  @media  (max-width: 1280px) {
    align-items: center;
    * {
      text-align: center;
    }
  }
  @media  (max-width: 1280px) {
    span:last-of-type {
      text-align: justify;
    }
  }
`

export const Background = styled.div`
  background-color: #fdf3f3;
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`

export const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4c4141;
  padding: 8px 16px;
  border-radius: 8px;
  color: #fdf3f3 !important;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 2.6px;
  text-decoration: none;

  svg {
    margin-right: 16px;
  }
`