"use client";
import styled from "styled-components";
import DataTable from "@/components/layout/dataTable/DataTable";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainPageContainer = () => {
  const router = useRouter();

  return (
    <Container>
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
    </Container>
  );
};

export default MainPageContainer;
