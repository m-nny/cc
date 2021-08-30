import React from 'react';
import { PageWrapper, Logo, FlexRow, Title, Divider } from '../components/styles';

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
