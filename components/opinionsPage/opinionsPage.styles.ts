import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 40px 40px;
  max-width: 1280px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
  align-items: center;

  >span {
    font-family: 'Libre Baskerville', sans-serif;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 32px;
    align-self: center;
  }

  @media (max-width: 620px){
    >span {
      font-size: 32px;
    }
  }

  img {
    max-width: 100%;
    width: 480px;
  }
`