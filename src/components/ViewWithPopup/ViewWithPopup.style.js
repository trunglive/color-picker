import styled, { css } from "styled-components";

const popupPositionMapping = {
  left: "",
  center: "-50% + 20px",
  right: "-100% + 40px",
};

export const Container = styled.div`
  ${(props) =>
    props.showPopup &&
    css`
      position: absolute;
      z-index: 999;
      margin-top: 16px;
      transition: all 0.1s ease-out;
    `}
  transform: translateX(calc(${(props) =>
    popupPositionMapping[props.popupPosition || "center"]}));
`;

export const Wrapper = styled.div`
  //position: relative;

  .popup_handler {
  }
`;
