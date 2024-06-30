import React, { ChangeEvent, ReactNode, useState } from 'react';
import styled from 'styled-components'
import { Wrapper, Title, Content, HeaderWrapper, ModalWrapper } from './Modal.styles';
import Button from '../Button';
// import searchIcon from '../../asstes/search.svg';

interface ModalProps {
    // onSubmit: () => void;
    onCancel: () => void;
    cancel: string;
    submit: string;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children, cancel, submit, onCancel }) => {
    return (
        <ModalWrapper id="modal">
            <Wrapper>
            <HeaderWrapper>
                <Title>{title}</Title>
                <Button onClick={onCancel} width="50%">{'x'}</Button>
            </HeaderWrapper>
            
            <Content>{children}</Content>
            
            </Wrapper>
        </ModalWrapper>

    );
};

export default Modal;