import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES, COLORS } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  width: 100%;

  @media(${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  
`;

const MarketsSection = styled.section`
  
  @media(${QUERIES.laptopAndUp}) {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 24px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;
  grid-template-columns:
      repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  width: 100%;
  overflow: auto;

  `;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
      repeat(auto-fill, minmax(150px, 1fr));

  @media(${QUERIES.tabletAndUp}) {
    display: flex;
    overflow: auto;
    & img {
      height: 132px;
      width: 220px;
      object-fit: cover;
    }
    
    height: 212px;
  }
`;

export default SpecialtyStoryGrid;
