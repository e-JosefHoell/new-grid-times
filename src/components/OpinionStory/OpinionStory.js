import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <AuthorName>{author}</AuthorName>
        <ArticleTitle>{title}</ArticleTitle>
        <Avatar alt="" src={avatar} />
      </Wrapper>
    </a>
  );
};


const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  gap: 0 8px;
  grid-template-columns: 1fr 48px;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'author avatar'
    'title avatar';

  
  @media(${QUERIES.tabletOnly}) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-template-areas:
      'avatar'
      'author'
      'title';
  }
`;

const Avatar = styled.img`
  display: block;
  grid-area: avatar;
  align-self: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
