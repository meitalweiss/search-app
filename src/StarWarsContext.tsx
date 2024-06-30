import { createContext, useState } from 'react';

type Result = Record<string, string>;

interface StarWarsContextType {
    results: Record<string, Result[]>;
    setResults: React.Dispatch<React.SetStateAction<Record<string, Result[]>>>;
 }

const initialResults: Record<string, any> = {}; // Initial empty object or initial state

export const StarWarsContext = createContext<StarWarsContextType>({
  results: initialResults,
  setResults: () => {},
});

export const StarWarsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [results, setResults] = useState(initialResults);

  return (
    <StarWarsContext.Provider value={{ results, setResults }}>
      {children}
    </StarWarsContext.Provider>
  );
};