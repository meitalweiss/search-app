import React from 'react';
import styled from 'styled-components'

interface ItemProps {
    title?: string;
    name?: string;
}

export const Item = styled.div`
    color: #000;
    font-size: 14px;
    padding: 5px 10px;
    text-transform: capitilised;
`;


const ResultItem: React.FC<ItemProps> = ({ title, name }) => {
    return (
        <Item>
            {title ?? name}
        </Item>

    );
};

export default ResultItem;