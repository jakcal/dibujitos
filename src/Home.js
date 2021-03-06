import React from 'react';
import styled from 'styled-components';
import Latest from './Latest';
import Calendar from './Calendar';
import RawSearch from './Rawsearch';
import { Route, Switch } from 'react-router-dom';

const HomeStyles = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 920px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

function Home({location}) {
  const qs = location.search.replace('?', '');
  const urlParams = new URLSearchParams(qs);
  const search = urlParams.get('search') || '';
  return (
    <HomeStyles>
      <Switch>
        <Route exact path="/home" 
          render={() => (<Latest search={search} />)} />
        <Route path="/home/rawsearch" 
          render={() => (<RawSearch search={search} />)} />
      </Switch>
      {/* <Calendar /> */}
    </HomeStyles>
  );
}

export default Home;
