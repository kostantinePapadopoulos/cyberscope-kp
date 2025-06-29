"use client";
import styled from "styled-components";
import DataTable from "@/components/layout/dataTable/DataTable";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  max-width: 1400px;
`;

const MainPageContainer = () => {
  const router = useRouter();

  return (
    <Container>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <DataTable
          url="/api/coins/markets"
          columns={[
            { key: "name", label: "Name" },
            { key: "symbol", label: "Symbol" },
            { key: "current_price", label: "Current price" },
            { key: "high_24h", label: "Highest price last 24h" },
            { key: "low_24h", label: "Lowest price last 24h" },
            {
              key: "price_change_percentage_24h",
              label: "Price change last 24h",
            },
          ]}
          onRowClick={(row) => router.push(`/coins/${row.id}`)}
        />
      </div>
    </Container>
  );
};

export default MainPageContainer;
