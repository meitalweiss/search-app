import React from 'react';
import SearchPage from './pages/search/SearchPage';
import { Wrapper } from './App.styles';
import PeoplePage from './pages/people/PeoplePage';
import CategoryPage from './pages/category/CategoryPage';
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
          <Route path="planets" element={<CategoryPage category='planets' />} />
          <Route path="films" element={<CategoryPage category='films' />} />
          <Route path="species" element={<CategoryPage category='species' />} />
          <Route path="vehicles" element={<CategoryPage category='vehicles' />} />
          <Route path="starships" element={<CategoryPage category='starships' />} />
        </Routes>
      </Wrapper>
    </StarWarsProvider>
  );
}

export default App;
