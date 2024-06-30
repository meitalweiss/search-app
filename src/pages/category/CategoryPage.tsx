import React, { useState, useContext } from 'react';
import { 
    Wrapper,
    Header,
} from './CategoryPage.styles';

interface CategoryPage {
    category: string;
}


const CategoryPage: React.FC<CategoryPage> = ({ category }) => {

    return (
        <Wrapper>
            <Header>
                <h1>{`${category} Page`}</h1>
            </Header>

        </Wrapper>
    );
};

export default CategoryPage;