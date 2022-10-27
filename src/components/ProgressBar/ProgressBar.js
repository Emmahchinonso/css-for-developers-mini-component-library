/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, width }) => {
  const sizeStyle = sizes[size];
  return (
    <>
      <VisuallyHidden>
        <label htmlFor="progress-steps">Progress Bar</label>
      </VisuallyHidden>
      <Progress
        id="progress-steps"
        max="100"
        value={value}
        style={sizeStyle}
        width={width}
      ></Progress>
    </>
  );
};

const Progress = styled.progress`
  --slider-width: ${(props) => props.value}%;
  -webkit-appearance: none;
  position: relative;
  height: var(--height) !important;
  width: ${(props) => props.width};

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius, 4px);
    padding: var(--padding);
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
    ${(props) =>
      props.value >= 90
        ? `
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  `
        : props.value === 100
        ? `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `
        : "0"}
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(var(--slider-width) - (var(--padding, 0px) * 2));
    height: calc(var(--height) - (var(--padding, 0px) * 2));
    background-color: #fff;
    top: var(--padding, 0);
    left: var(--padding, 0);
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
