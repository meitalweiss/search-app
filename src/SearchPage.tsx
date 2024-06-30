import React, { useState, useEffect, useRef } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import Loader from './components/Loader';
import { fetchSearchResults, fetchAllCategories } from './apiService'; 
import type { Result } from './apiService';
import ResultList from './ResultList';
import { Wrapper, LoaderContainer } from './SearchPage.styles';

interface SearchPageProps {
    // Add any props needed for SearchPage
}

const SearchPage: React.FC<SearchPageProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [results, setResults] = useState({});
    const showResults = useRef(false);
    const [loading, setLoading] = useState<boolean>(false);
    console.log('results', results)

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
            {showResults.current && <ResultList categories={categories} results={results} loading={loading} maxItems={3} />}
        </Wrapper>
    );
};

// interface Result {
//     name: string;
//     url: string;
//     // Add more fields based on your API response structure
// }

// interface ResultsListProps {
//     results: Result[];
// }

// const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
//     return (
//         <div>

//             {/* <CategoryResults category="films" results={results.films} />
//             <CategoryResults category="people" results={results.people} />
//             Add more categories as needed */}
//         </div>
//     );
// };

interface CategoryResultsProps {
    category: string;
    results: Result[];
}

const CategoryResults: React.FC<CategoryResultsProps> = ({ category, results }) => {
    console.log('category', category);
    console.log('results', results);
    return (
        <div>
            <h2>{category}</h2>
            <ul>
                {results?.slice(0, 3).map(result => (
                    <li key={result.url}>{result.name}</li>
                ))}
            </ul>
            <button>View All {category}</button>
        </div>
    );
};

export default SearchPage;