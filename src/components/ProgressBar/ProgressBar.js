/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, width }) => {
  const sizeStyle = sizes[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={sizeStyle}
    >
      <BarWrapper>
        <Bar style={{ "--width": `${value}%` }} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius, 4px);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  position: relative;
  --slider-width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  height: calc(var(--height) - (var(--padding, 0px) * 2));
  width: var(--width);
  border-radius: 4px 0 0 4px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
    transform: translateX(-100%);
    animation: slide 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-duration: 2.4s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: slide;
    @keyframes slide {
      0% {
        opacity: 0.19;
      }
      30% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.01;
      }
      60% {
        opacity: 0.001;
      }
      100% {
        transform: translateX(0);
        opacity: 0.00285;
      }
    }
  }
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const sizes = {
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
  medium: {
    "--height": "12px",
  },
  small: {
    "--height": "8px",
  },
};
export default ProgressBar;
