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

  #popup {
    position: relative;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    box-shadow: 0 5px 16px 0 rgb(0 0 0 / 6%);
  }

  .tooltip_arrow {
    position: absolute;
    top: -6px;
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-top: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    border-radius: 1px;
  }
`;

export const Wrapper = styled.div`
  .popup_handler {
    //customize css later
  }
`;