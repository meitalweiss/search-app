import React, { useState, useEffect, useRef, useContext } from 'react';
import SearchInput from './components/searchInput/SearchInput';
import Loader from './components/Loader';
import { StarWarsContext } from './StarWarsContext';
import { fetchSearchResults, fetchAllCategories } from './apiService'; 
import type { Result } from './apiService';
import ResultList from './ResultList';
import { Wrapper, LoaderContainer } from './SearchPage.styles';

const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    // const [results, setResults] = useState({});
    const { results, setResults } = useContext(StarWarsContext);
    const showResults = useRef(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {   
        const fetchCategories = async () => { // Create a new async function: clear
            try {
                const categories = await fetchAllCategories();
                setCategories(Object.keys(categories));
                // Handle your data here
              } catch (error) {
                console.error('Error fetching categories:', error);
                // Handle errors
              }
        };

        fetchCategories() 
    }, [])

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        let resultData = {};
        setSearchTerm(value);
        setLoading(true);
        showResults.current = false;

        try {
            
            const promises = categories.map(async category => {
                const data = await fetchSearchResults(category, value);
                return { [category]: data };
            });
    
            const resultsArray = await Promise.all(promises);
            const resultData = resultsArray.reduce((acc, obj) => ({ ...acc, ...obj }), {});
            
            setResults(resultData);
            showResults.current = true;
            // setContextResults(resultData);
        } catch (error) {
            console.log('error', error);
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Star Wars universe..."
            />
            {loading && <LoaderContainer>
                <Loader />
            </LoaderContainer>}
            {showResults.current &&
                <ResultList categories={categories} results={results} loading={loading} maxItems={3} />
            }
        </Wrapper>
    );
};

export default SearchPage;