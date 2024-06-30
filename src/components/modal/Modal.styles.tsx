import styled from 'styled-components';


export const ModalWrapper = styled.dialog`
    display: flex;
    background: #0003;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 5;

`;

export const Wrapper = styled.dialog`
    display: flex;
    flex-direction: column;
    width: 500px;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    padding: 10px;
    border: 1px solid #46b4b7;
    border-radius: 10px;
`;

export const Title = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: #46b4b7;
    text-transform: uppercase;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;