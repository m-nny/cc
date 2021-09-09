import React from 'react';
import sampleImage from '../../assets/dataset-placeholder.jpg';
import { Card } from '../components/card';
import { Grid } from '../components/card-grid';
import { PageWrapper } from '../components/containers';
import { Logo } from '../components/kit';
import { TDataset } from '../models/dataset';

const dataset: TDataset = {
    name: 'dataset 0',
    imageUrl: sampleImage,
};

export const HomePage: React.FC = () => (
    <PageWrapper>
        <Logo>CC</Logo>
        <Grid style={{ marginTop: 80 }}>
            <Card item={dataset} />
            <Card item={dataset} />
            <Card item={dataset} />
            <Card item={dataset} />
            <Card item={dataset} />
        </Grid>
    </PageWrapper>
);
