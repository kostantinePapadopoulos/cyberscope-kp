"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../layout/loader/Loader";
import CoinView from "./CoinView";

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
`;

const CoinPageContainer = ({ coindId }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!coindId) return null;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/coins/${coindId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result || {});
    } catch (error) {
      console.error("API error:", error);
      setData({});
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coindId]);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage>We couldn't locate this crypto</ErrorMessage>;

  return (
    <div>{Object.keys(data).length > 0 && <CoinView cryptoData={data} />}</div>
  );
};

export default CoinPageContainer;
