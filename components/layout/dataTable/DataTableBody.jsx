import React from "react";
import styled from "styled-components";

const StyledTbody = styled.tbody`
  & > tr:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`;

const NoDataRow = styled.tr``;

const NoDataCell = styled.td`
  padding: 2rem 1rem;
  text-align: center;
  color: #6b7280;
`;

const DataRow = styled.tr`
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};

  &:hover {
    background-color: ${(props) =>
      props.clickable ? "#f3f4f6" : "transparent"};
  }
`;

const DataCell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #111827;
  white-space: nowrap;
`;

const DataTableBody = ({ data, columns, onRowClick }) => {
  if (!data || data.length === 0) {
    return (
      <StyledTbody>
        <NoDataRow>
          <NoDataCell colSpan={columns?.length || 1}>
            No data available
          </NoDataCell>
        </NoDataRow>
      </StyledTbody>
    );
  }

  return (
    <StyledTbody>
      {data.map((row, index) => (
        <DataRow
          key={index}
          onClick={() => onRowClick?.(row)}
          clickable={!!onRowClick ? "true" : "false"}
        >
          {columns.map((col) => (
            <DataCell key={col.key}>{String(row[col.key] || "")}</DataCell>
          ))}
        </DataRow>
      ))}
    </StyledTbody>
  );
};

export default DataTableBody;
