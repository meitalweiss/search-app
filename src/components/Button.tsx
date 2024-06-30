import React, { useState } from 'react';
import styled from 'styled-components'


const Button = styled.button`
    background: #46b4b7;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    width: fit-content;

    &:active {
        background: #2f6f70;
    }
`

export default Button;