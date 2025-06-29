import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  border: 2px solid transparent;
  border-bottom: 2px solid #2563eb;
`;

const LoadingText = styled.span`
  margin-left: 0.5rem;
  color: #6b7280;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
