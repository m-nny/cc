import React from 'react';
import { Logo, Title, InputBox, ButtonBox } from '../components/kit';
import { PageWrapper, FlexColumn } from '../components/containers';

export const RegisterPage: React.FC = () => (
    <PageWrapper>
        <Logo>CC</Logo>
        <Title>REGISTER</Title>
        <FlexColumn>
            <InputBox placeholder='username' />
            <InputBox placeholder='password' type='password' />
            <InputBox placeholder='repeat password' type='password' />
            <ButtonBox children='register' onClick={() => console.log('hi')} />
        </FlexColumn>
    </PageWrapper>
);
