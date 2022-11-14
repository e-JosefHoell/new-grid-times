import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  /* gap: 48px; */
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}) {
    grid-template-columns: 5fr 3fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
  }
  @media(${QUERIES.desktopAndUp}) {
    grid-template-columns: 5fr 3fr 2fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story  advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media(${QUERIES.tabletAndUp}) {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 1rem;
  }  

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media(${QUERIES.desktopAndUp}) {  
      /* border-right: 1px solid ${COLORS.gray[300]}; */
      padding-left: 1rem;
    }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media(${QUERIES.desktopAndUp}) {  
      border-top: 1px solid ${COLORS.gray[300]};
      padding-top: 1rem;
      margin-left: 1rem;
    }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media(${QUERIES.desktopAndUp}) {  
    padding-bottom: 1rem;
  }

  & > *:not(:first-of-type) {
    padding-top: 1rem;
  }
  & > *:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-bottom: 1rem;
  }
  `;

  const SecondaryStoryList = styled(StoryList)`
    @media(${QUERIES.tabletAndUp}) {
      padding-left: 1rem;
  }  
  @media(${QUERIES.desktopAndUp}) {
      border-right: 1px solid ${COLORS.gray[300]};
      padding-right: 1rem;
  }  
  `;

  const OpinionStoryList = styled(StoryList)`
    
    @media(${QUERIES.tabletOnly}) {  
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    `;

export default MainStoryGrid;
