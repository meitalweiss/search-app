import styled, { keyframes } from 'styled-components'

const spin =  keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 4px solid #6fcbce80;
  border-top: 4px #46b4b7 solid;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: ${spin} 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;