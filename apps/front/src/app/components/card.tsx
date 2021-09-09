import React from 'react';
import styled from 'styled-components';
import { Subtitle } from '../components/kit';
import { TDataset } from '../models/dataset';

export type CardProps = {
    item: TDataset;
};

export const Card: React.FC<CardProps> = ({ item: { name, imageUrl } }) => (
    <CardContainer>
        <Subtitle children={name} />
        <CardImage src={imageUrl} />
    </CardContainer>
);

const CardContainer = styled.div`
    border: solid 1px black;
    width: 200px;
    max-height: 300px;

    box-sizing: border-box;
    padding: 10px;
`;

const CardImage = styled.img`
    width: 180px;
`;
