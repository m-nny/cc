import React from 'react';
import { Logo, Title } from '../components/kit';
import { PageWrapper, FlexRow, Divider } from '../components/containers';

export const HomePage: React.FC = () => (
    <PageWrapper>
        <Logo>CC</Logo>
        <FlexRow>
            <Title>REGISTER</Title>
            <Divider />
            <Title>LOG IN</Title>
        </FlexRow>
    </PageWrapper>
);
