export type Result = Record<string, string>;

export type Categories = Record<string, string>;

const fetchSearchResults = async (category: string, searchTerm: string): Promise<Result[]> => {
    try {
        const response = await fetch(`https://swapi.dev/api/${category}/?search=${searchTerm}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${category}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('API Error:', error);
        throw new Error(`Unable to fetch data for ${category}. Please try again later.`);
    }
};


const fetchAllCategories = async (): Promise<Categories> => {
    try {
        const response = await fetch(`https://swapi.dev/api/`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw new Error('Unable to fetch data. Please try again later.');
    }
};

export { fetchSearchResults, fetchAllCategories };
