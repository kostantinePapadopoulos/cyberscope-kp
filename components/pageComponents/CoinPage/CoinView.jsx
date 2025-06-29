import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { TrendingUp, TrendingDown, BarChart3, ArrowLeft } from "lucide-react";

const Container = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const BackButtonSection = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #4b5563;
  transition: all 0.2s;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;

  &:hover {
    color: #1f2937;
    background-color: #f9fafb;
  }

  span {
    font-weight: 500;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const Header = styled.div`
  background: linear-gradient(to right, #2563eb, #9333ea);
  padding: 1.5rem;
  color: white;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin: 0;
  }
`;

const PriceDisplay = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const HeaderRight = styled.div`
  text-align: right;
`;

const ChangeDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.changecolor};

  span {
    font-size: 1.125rem;
    font-weight: 500;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ChangeLabel = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
`;

const StatsSection = styled.div`
  padding: 1.5rem;
  background-color: #f9fafb;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.color || "#111827"};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const PerformanceCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const PerformanceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #4b5563;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }
`;

const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PerformanceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;

  span:first-child {
    font-size: 0.875rem;
    color: #4b5563;
  }

  span:last-child {
    font-weight: 600;
    color: ${(props) => props.changeColor};
  }
`;

const DescriptionSection = styled.div`
  padding: 1.5rem;
`;

const DescriptionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const DescriptionContent = styled.div`
  max-width: none;
`;

const DescriptionParagraph = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CoinView = ({ cryptoData }) => {
  const router = useRouter();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatPercentage = (percentage) => {
    return percentage > 0
      ? `+${percentage.toFixed(2)}%`
      : `${percentage.toFixed(2)}%`;
  };

  const getChangeColor = (value) => {
    return value > 0 ? "#10b981" : value < 0 ? "#ef4444" : "#6b7280";
  };

  const getChangeIcon = (value) => {
    return value > 0 ? <TrendingUp /> : <TrendingDown />;
  };

  const formatDescription = (description) => {
    return description.replace(/\r\n/g, "\n").split("\n\n");
  };

  return (
    <Container>
      {/* Back Button */}
      <BackButtonSection>
        <BackButton onClick={() => router.push(`/`)}>
          <ArrowLeft />
          <span>Back to List</span>
        </BackButton>
      </BackButtonSection>

      {/* Header Section */}
      <Header>
        <HeaderContent>
          <HeaderLeft>
            <h1>{cryptoData.name}</h1>
            <PriceDisplay>
              <span>{formatPrice(cryptoData.current_price)}</span>
            </PriceDisplay>
          </HeaderLeft>
          <HeaderRight>
            <ChangeDisplay
              changecolor={getChangeColor(
                cryptoData.price_change_percentage_24h_in_currency || 0
              )}
            >
              {getChangeIcon(
                cryptoData.price_change_percentage_24h_in_currency || 0
              )}
              <span>
                {formatPercentage(
                  cryptoData.price_change_percentage_24h_in_currency || 0
                )}
              </span>
            </ChangeDisplay>
            <ChangeLabel>24h Change</ChangeLabel>
          </HeaderRight>
        </HeaderContent>
      </Header>

      {/* Price Statistics */}
      <StatsSection>
        <StatsGrid>
          <StatCard>
            <StatLabel>24h High</StatLabel>
            <StatValue color="#10b981">
              {formatPrice(cryptoData.high_24h_in_currency)}
            </StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>24h Low</StatLabel>
            <StatValue color="#ef4444">
              {formatPrice(cryptoData.low_24h_in_currency)}
            </StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>7d Change</StatLabel>
            <StatValue
              color={getChangeColor(
                cryptoData.price_change_percentage_7d_in_currency
              )}
            >
              {getChangeIcon(cryptoData.price_change_percentage_7d_in_currency)}
              <span>
                {formatPercentage(
                  cryptoData.price_change_percentage_7d_in_currency
                )}
              </span>
            </StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>14d Change</StatLabel>
            <StatValue
              color={getChangeColor(
                cryptoData.price_change_percentage_14d_in_currency
              )}
            >
              {getChangeIcon(
                cryptoData.price_change_percentage_14d_in_currency
              )}
              <span>
                {formatPercentage(
                  cryptoData.price_change_percentage_14d_in_currency
                )}
              </span>
            </StatValue>
          </StatCard>
        </StatsGrid>

        {/* Performance Chart */}
        <PerformanceCard>
          <PerformanceHeader>
            <BarChart3 />
            <h3>Performance Overview</h3>
          </PerformanceHeader>
          <PerformanceGrid>
            <PerformanceItem
              changecolor={getChangeColor(
                cryptoData.price_change_percentage_30d_in_currency
              )}
            >
              <span>30 Days</span>
              <span>
                {formatPercentage(
                  cryptoData.price_change_percentage_30d_in_currency
                )}
              </span>
            </PerformanceItem>
            <PerformanceItem
              changecolor={getChangeColor(
                cryptoData.price_change_percentage_60d_in_currency
              )}
            >
              <span>60 Days</span>
              <span>
                {formatPercentage(
                  cryptoData.price_change_percentage_60d_in_currency
                )}
              </span>
            </PerformanceItem>
            <PerformanceItem
              changecolor={getChangeColor(
                cryptoData.price_change_200d_in_currency
              )}
            >
              <span>200 Days</span>
              <span>
                {formatPercentage(cryptoData.price_change_200d_in_currency)}
              </span>
            </PerformanceItem>
          </PerformanceGrid>
        </PerformanceCard>
      </StatsSection>

      {/* Description Section */}
      <DescriptionSection>
        <DescriptionTitle>About {cryptoData.name}</DescriptionTitle>
        <DescriptionContent>
          {formatDescription(cryptoData.description).map((paragraph, index) => (
            <DescriptionParagraph key={index}>{paragraph}</DescriptionParagraph>
          ))}
        </DescriptionContent>
      </DescriptionSection>
    </Container>
  );
};

export default CoinView;
