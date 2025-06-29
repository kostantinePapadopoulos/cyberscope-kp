"use client";
import { buildQueryString } from "@/utils/buildQueryString";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DataTableHeader from "./DataTableHeader";
import DataTablePagination from "./DataTablePagination";
import DataTableBody from "./DataTableBody";
import Loader from "../loader/Loader";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 100;
  padding: 1rem 0;
  margin: 0;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 100%;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const DataTable = ({ url, columns, onRowClick }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = {
        per_page: per_page,
        page: page,
      };
      const queryString = buildQueryString(params);
      const response = await fetch(`${url}?${queryString}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result.data || []);
      console.log("data", result);
    } catch (error) {
      console.error("API error:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, per_page, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePerPageChange = (newPerPage) => {
    setPer_page(newPerPage);
    setPage(1); // Reset to first page when changing items per page
  };

  return (
    <Container>
      <Title>List of coins</Title>

      {loading ? (
        <Loader />
      ) : (
        <>
          <TableContainer>
            <Table>
              <DataTableHeader columns={columns} />
              <DataTableBody
                data={data}
                columns={columns}
                onRowClick={onRowClick}
              />
            </Table>
          </TableContainer>

          <DataTablePagination
            currentPage={page}
            itemsPerPage={per_page}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handlePerPageChange}
          />
        </>
      )}
    </Container>
  );
};

export default DataTable;
