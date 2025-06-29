import React from "react";
import styled from "styled-components";

const StyledThead = styled.thead`
  background-color: #f9fafb;
`;

const HeaderRow = styled.tr``;

const HeaderCell = styled.th`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
`;

const DataTableHeader = ({ columns }) => {
  if (!columns || columns.length === 0) return null;

  return (
    <StyledThead>
      <HeaderRow>
        {columns.map((col) => (
          <HeaderCell key={col.key}>{col.label}</HeaderCell>
        ))}
      </HeaderRow>
    </StyledThead>
  );
};

export default DataTableHeader;
