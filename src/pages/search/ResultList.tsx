import React, { ChangeEvent, useState } from 'react';
import { Wrapper, Category } from './ResultList.styles';
import ResultItem from './ResultItem';
import { Link } from 'react-router-dom'; 
import Loader from '../../components/Loader';
import Button from '../../components/Button';

type Result = Record<string, string>;

interface Results {
    results: Record<string, Result[]>;
    categories: string[];
    loading: boolean;
    maxItems: number;
}

const ResultList: React.FC<Results> = ({ results, categories, loading, maxItems }) => {
    return (
        <Wrapper>
            {loading && <Loader />}
            {categories.map(category => (
                <>
                    <Category>{category}</Category>
                    {results[category]?.slice(0, maxItems).map(item => (
                        <ResultItem key={item.url} {...item} />
                    ))}
                     <Link to={`/${category.toLowerCase()}`}>
                        <Button>View All</Button>
                    </Link>
                </>
            ))}
        </Wrapper>
    );
};

export default ResultList;