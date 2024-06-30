import React from 'react';
import SearchPage from './SearchPage';
import { Wrapper } from './App.styles';
import PeoplePage from './PeoplePage';
import { StarWarsProvider } from './StarWarsContext'; // Import StarWarsProvider
import { Routes, Route, Outlet, Link } from "react-router-dom";

// TODO add page don't exist 
function App() {
  return (
    <StarWarsProvider>
      <Wrapper >
        <Routes>
          <Route index element={<SearchPage />} />
          <Route path="people" element={<PeoplePage />} />
        </Routes>
      </Wrapper>
    </StarWarsProvider>
  );
}

export default App;
