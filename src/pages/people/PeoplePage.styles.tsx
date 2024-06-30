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
    border: 1px solid #46b4b7;
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
    gap: 5px;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;


export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const FormInput = styled.input`
    width: 100%;
    line-height: 1.47em;
    font-size: 12px;
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

export const ActionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
`;