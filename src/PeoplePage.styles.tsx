import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
    padding: 50px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 900px;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
`;


export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`;

export const TableHeaderColumn = styled.div`
    display: flex;
    text-transform: capitalize;
    padding: 10px;
    font-weight: 700;
    color: #46b4b7;
    width: 150px;
`;


export const TableColumn = styled.div`
    display: flex;
    text-transform: capitalize;
    padding: 10px;
    width: 150px;
`;
