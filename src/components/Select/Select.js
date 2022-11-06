import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Container htmlFor="selectItems">
        <NativeSelect id="selectItems" value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
          <span>{displayedValue}</span>
          <Icon id="chevron-down" strokeWidth="2" />
        </PresentationalBit>
      </Container>
    </>
  );
};

const Container = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.1;
`;

const PresentationalBit = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 12px 18px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border: 1px solid var(--select-border);
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: inherit;
  line-height: inherit;
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  opacity: 0;
  margin: 0;
  font-family: inherit;
  cursor: inherit;

  &:focus + ${PresentationalBit} {
    outline: 2px solid blue;
    color: ${COLORS.gray700};
  }

  &:hover + ${PresentationalBit} {
    color: ${COLORS.black};
  }
`;

export default Select;
