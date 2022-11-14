import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </ActionGroup>
        <Logo />
        <ActionGroup>
            <SubButton>
              Subscribe
            </SubButton>
            <Button>Subscribe</Button>
        </ActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media(${QUERIES.desktopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 32px;
  margin-bottom: 48px;


  @media (${QUERIES.desktopAndUp}) {
      justify-content: space-between;
    }
  

  & > ${ActionGroup} {
    display: none;

    @media (${QUERIES.desktopAndUp}) {
      display: flex;
    }
  }
`;

const SubButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  padding: 11px 24px;
  border-radius: 4px;
  font: 1rem Helvetica;
  font-weight: 700;
  
  text-transform: uppercase;
  
`;

export default Header;
