// SearchPage.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchPage from './SearchPage';
import { StarWarsContext } from '../../StarWarsContext';
import { fetchAllCategories, fetchSearchResults } from '../../apiService'; // Import mock functions

jest.mock('../../apiService'); // Mock the entire module

const mockFetchAllCategories = fetchAllCategories as jest.MockedFunction<typeof fetchAllCategories>;
const mockFetchSearchResults = fetchSearchResults as jest.MockedFunction<typeof fetchSearchResults>;

describe('SearchPage Component', () => {
  beforeEach(() => {
    // Reset mock implementation before each test
    mockFetchAllCategories.mockResolvedValue({
      films: "https://swapi.dev/api/films/",
      people: "https://swapi.dev/api/people/",
      planets: "https://swapi.dev/api/planets/",
      species: "https://swapi.dev/api/species/",
      starships: "https://swapi.dev/api/starships/",
      vehicles:  "https://swapi.dev/api/vehicles/"
    });

    mockFetchSearchResults.mockImplementation(async (category: string, searchTerm: string) => {
      return [
        { name: `Mock ${category} Result 1`, category },
        { name: `Mock ${category} Result 2`, category },
        // Adjust mock data according to your needs
      ];
    });
  });

  it('renders SearchPage component', async () => {
    render(
      <StarWarsContext.Provider value={{ results: {}, setResults: jest.fn() }}>
        <SearchPage />
      </StarWarsContext.Provider>
    );

    // Verify initial loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for categories to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Search Star Wars universe...')).toBeInTheDocument();
      expect(screen.getByText('films')).toBeInTheDocument();
      expect(screen.getByText('people')).toBeInTheDocument();
      // Add more categories as needed
    });
  });

  it('handles search functionality', async () => {
    render(
      <StarWarsContext.Provider value={{ results: {}, setResults: jest.fn() }}>
        <SearchPage />
      </StarWarsContext.Provider>
    );

    // Wait for categories to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Search Star Wars universe...')).toBeInTheDocument();
    });

    // Simulate search input change
    fireEvent.change(screen.getByPlaceholderText('Search Star Wars universe...'), { target: { value: 'Luke' } });

    // Wait for search results to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Mock films Result 1')).toBeInTheDocument();
      expect(screen.getByText('Mock films Result 2')).toBeInTheDocument();
    });
  });

  // Add more tests for loading state, error handling, etc. as needed
});
