import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: transparent;
  transition: 256ms background-color ease-in-out;

  @media (max-width: 860px) {
    bottom: 0;
    top: initial;
    background-color: #4c4141;

    > div > a:first-of-type {
      display: none;
    }
  }

  @media (min-width: 860px) {
    * {
      color: #4c4141;
    }
    
    &.scrolled {
      background-color: #4c4141;

      * {
        color: #fdf3f3 !important;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  padding: 8px 40px;

  >a {
    font-weight: 300;
    font-family: 'Cinzel', sans-serif;
    font-size: 32px;
    text-decoration: none;
    color: #3b3030;
  }
  
  @media (max-width: 860px) {
    justify-content: center;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  a {
    white-space: nowrap;
    display: flex;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #3b3030;
    padding: 8px 12px;
    border-radius: 4px;
    width: 72px;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
    
    svg {
      display: none;
    }
  }

  a:first-of-type {
    display: none;
  }

  @media (max-width: 860px) {
    a {
      flex-direction: column;
      gap: 8px;
      color: #fdf3f3;
    }

    a svg {
      display: inline-block;
    }

    a:first-of-type {
      display: flex;
    }

    a.active::after {
      content: '';
      display: block;
      width: 20px;
      height: 3px;
      background-color: white;
      position: absolute;
      bottom: -3px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    a {
      gap: 4px;
      font-size: 12px;
      font-weight: 400;
      padding: 4px 0;
      width: initial;
    }
    a.active::after {
      height: 1px;
    }
  }
`