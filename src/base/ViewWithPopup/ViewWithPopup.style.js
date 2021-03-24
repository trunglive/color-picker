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
    props?.showPopup &&
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

  .popup {
    position: relative;

    ${(props) =>
      props.enableTooltip
        ? css`
            padding: 5px 9px;
            font-size: 11px;
            color: #fff;
            background-color: #222831;
          `
        : css`
            border: 1px solid #f2f2f2;
            border-radius: 2px;
            box-shadow: 0 5px 16px 0 rgb(0 0 0 / 6%);
          `}
  }

  .popup_arrow {
    position: absolute;
    transform: rotate(-45deg);

    ${(props) =>
      props.enableTooltip
        ? css`
            top: -3px;
            left: calc(50% - 3px);
            height: 6px;
            width: 6px;
            background-color: #222831;
            border-top: 1px solid #222831;
            border-right: 1px solid #222831;
            border-radius: 2px;
          `
        : css`
            top: -6px;
            left: calc(50% - 6px);
            height: 10px;
            width: 10px;
            background-color: #fff;
            border-top: 1px solid #f2f2f2;
            border-right: 1px solid #f2f2f2;
            border-top-right-radius: 2px;
          `}
  }
`;

export const Wrapper = styled.div`
  .popup_handler {
    //customize css later
  }
`;
