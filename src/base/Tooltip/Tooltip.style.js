import styled, { css } from "styled-components";

const popupPositionMapping = ({ position, handlerWidth }) => {
  const positionObj = {
    left: "",
    center: `-50% + ${handlerWidth / 2}px`,
    right: `-100% + ${handlerWidth}px`,
  };
  return positionObj[position];
};

export const Container = styled.div`
  ${(props) =>
    props.showPopup &&
    css`
      position: absolute;
      z-index: 999;
      margin-top: 10px;
      transition: all 0.1s ease-out;
    `}
  transform: translateX(calc(${(props) =>
    popupPositionMapping({
      position: props.popupPosition || "center",
      handlerWidth: props.popupHandlerWidth,
    })}));

  .tooltip {
    position: relative;
    background-color: #222831;
    border-radius: 2px;
  }

  .tooltip_arrow {
    position: absolute;
    top: -3px;
    left: calc(50% - 3px);
    transform: rotate(-45deg);
    height: 6px;
    width: 6px;
    background-color: #222831;
    border-top: 1px solid #222831;
    border-right: 1px solid #222831;
    border-radius: 2px;
  }
`;

export const Wrapper = styled.div`
  .popup_handler {
    //customize css later
  }
`;
