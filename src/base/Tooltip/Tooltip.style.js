import styled, { css } from "styled-components";

const tooltipPositionMapping = ({ position, handlerWidth }) => {
  const positionObj = {
    left: "",
    center: `-50% + ${handlerWidth / 2}px`,
    right: `-100% + ${handlerWidth}px`,
  };
  return positionObj[position];
};

export const Container = styled.div`
  ${(props) =>
    props.showTooltip &&
    css`
      position: absolute;
      z-index: 999;
      margin-top: 10px;
      transition: all 0.1s ease-out;
    `}
  transform: translateX(calc(${(props) =>
    tooltipPositionMapping({
      position: props.tooltipPosition || "center",
      handlerWidth: props.tooltipHandlerWidth,
    })}));

  .tooltip {
    position: relative;
    padding: 5px 9px;
    font-size: 11px;
    color: #fff;
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
  .tooltip_handler {
    //customize css later
  }
`;
