import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const elementRef = React.useRef();
  const labelRef = React.useRef();
  const selectRef = React.useRef();

  function resize() {
    const leftAndRightPadding = 34;
    const flexGap = 24;
    const dropDownIconWidth = 24;
    const totalWidth = leftAndRightPadding + flexGap + dropDownIconWidth;
    console.log("elem", elementRef.current, elementRef.current.offsetWidth);
    labelRef.current.style.setProperty(
      "--width",
      `${elementRef.current.offsetWidth + totalWidth}px`
    );
  }

  React.useEffect(() => {
    resize();
  }, [value]);

  function activateSelect() {
    selectRef.current.select();
  }

  return (
    <>
      <Container htmlFor="selectItems" ref={labelRef} onClick={activateSelect}>
        <select
          hidden
          id="selectItems"
          value={value}
          onChange={onChange}
          ref={selectRef}
        >
          {children}
        </select>
        <Icon id="chevron-down" />
      </Container>
      <HelperText ref={elementRef}>{displayedValue}</HelperText>
    </>
  );
};

const Container = styled.label`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border: 1px solid var(--select-border);
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 18px 12px 16px;
  width: var(--width);
  & select {
    appearance: none;
    // Additional resets for further consistency
    background-color: transparent;
    width: 100%;
    color: ${COLORS.gray700};
    border: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
`;

const HelperText = styled.span`
  position: absolute;
  left: 999px;
  opacity: 0;
`;

export default Select;
