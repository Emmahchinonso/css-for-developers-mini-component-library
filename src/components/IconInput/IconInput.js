import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const {
    gap,
    strokeWidth,
    iconSize,
    fontSize,
    lineHeight,
    ySpacing,
  } = sizeProps[size];
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--gap": gap + "px",
        "--font-size": fontSize + "px",
        "--lineHeight": lineHeight,
        "--y-spacing": ySpacing + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon stroke={strokeWidth} size={iconSize} id={icon} />
      <NativeInput placeholder={placeholder} />
    </Wrapper>
  );
};

const sizeProps = {
  small: {
    strokeWidth: 1,
    iconSize: 16,
    fontSize: 14,
    lineHeight: 1.143,
    ySpacing: 4,
    gap: 8,
  },
  large: {
    strokeWidth: 2,
    iconSize: 24,
    fontSize: 18,
    lineHeight: 1.17,
    ySpacing: 7,
    gap: 12,
  },
};

const Wrapper = styled.label`
  width: var(--width);
  color: ${COLORS.gray700};
  display: flex;
  align-items: center;
  gap: var(--gap);
  border-bottom: var(--stroke-width) solid ${COLORS.black};
  padding-block: var(--y-spacing);
  font-size: var(--font-size);
  line-height: var(--line-height);

  &:focus-within {
    outline: 2px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  color: inherit;
  font-weight: 700;
  padding: 0;
  background-color: transparent;
  outline: none;
  font-size: inherit;
  line-height: inherit;
  border: 0;
  flex: 1;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
