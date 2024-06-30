import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components'
import { Input, SearchWrapper } from './SearchInput.styles';
// import searchIcon from '../../asstes/search.svg';

interface SearchInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
    placeholder: string;
}


const SearchInput: React.FC<SearchInputProps> = (props) => {
    return (
        <SearchWrapper>
            <Input type="search" {...props} />
        </SearchWrapper>

    );
};

export default SearchInput;