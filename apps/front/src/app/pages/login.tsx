import React from 'react';
import { Logo, Title, InputBox, ButtonBox } from '../components/kit';
import { PageWrapper, FlexColumn } from '../components/containers';

export const LoginPage: React.FC = () => (
    <PageWrapper>
        <Logo>CC</Logo>
        <Title>LOG IN</Title>
        <FlexColumn>
            <InputBox placeholder='username' />
            <InputBox placeholder='password' type='password' />
            <ButtonBox children='log in' onClick={() => console.log('hi')} />
        </FlexColumn>
    </PageWrapper>
);
