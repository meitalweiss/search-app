import styled from 'styled-components';

export const Input = styled.input`
    width: 500px;
    line-height: 1.47em;
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    border: solid 2px #46b4b7;
    outline: none;
    color: #46b4b7;

    &:focus {
        border-color: #6fcbce80;
    }

    &:placeholder,
    &::-webkit-input-placeholder
    &::-ms-input-placeholder {
        color: #6fcbce80;
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;