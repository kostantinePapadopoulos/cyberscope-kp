import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const Select = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    ring: 2px solid #3b82f6;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: #f9fafb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.div`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

const DataTablePagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const handleItemsPerPageChange = (newItemsPerPage) => {
    onItemsPerPageChange(newItemsPerPage);
  };

  return (
    <PaginationContainer>
      <LeftSection>
        <ItemsPerPageContainer>
          <Label>Items per page:</Label>
          <Select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </Select>
        </ItemsPerPageContainer>
      </LeftSection>

      <RightSection>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <PageIndicator>{currentPage}</PageIndicator>
        <Button onClick={() => onPageChange(currentPage + 1)}>Next</Button>
      </RightSection>
    </PaginationContainer>
  );
};

export default DataTablePagination;
