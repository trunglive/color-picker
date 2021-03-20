import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(props) =>
    props.showPopup &&
    css`
      position: absolute;
      z-index: 999;
      margin-top: 16px;
      transition: all 0.1s ease-out;
    `}
`;

export const Wrapper = styled.div`
  //position: relative;

  .popup_handler {
  }

  .popup_container {
    transform: translateX(calc(-50% + 20px));
  }
`;
