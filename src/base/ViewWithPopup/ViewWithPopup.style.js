import styled, { css } from "styled-components";
import themeGet from "@styled-system/theme-get";

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
    border: ${themeGet("border.solid.0")};
    border-radius: 2px;
    box-shadow: ${themeGet("boxShadow.0")};
  }

  .tooltip {
    position: relative;
    padding: 5px 9px;
    font-size: 11px;
    color: #fff;
    background-color: ${themeGet("bgColor.0")};
    border: none;
    border-radius: 2px;
    box-shadow: ${themeGet("boxShadow.0")};
  }

  .popup_arrow {
    position: absolute;
    transform: rotate(-45deg);
    top: -6px;
    left: calc(50% - 6px);
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-top: ${themeGet("border.solid.0")};
    border-right: ${themeGet("border.solid.0")};
    border-radius: 2px;
  }

  .tooltip_arrow {
    position: absolute;
    transform: rotate(-45deg);
    top: -3px;
    left: calc(50% - 3px);
    height: 6px;
    width: 6px;
    background-color: ${themeGet("bgColor.0")};
    border-top: ${themeGet("border.solid.1")};
    border-right: ${themeGet("border.solid.1")};
    border-top-right-radius: 2px;
  }
`;

export const Wrapper = styled.div`
  .popup_handler {
    //customize css later
  }
`;
