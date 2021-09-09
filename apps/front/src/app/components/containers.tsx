import styled from 'styled-components';

export const Divider = styled.div`
    border-left: 1px solid black;
    height: 600px;
    margin: 0 20px;
`;

export const FlexRow = styled.div`
    padding: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FlexColumn = styled.div`
    padding: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PageWrapper = styled.div`
    padding: 20px;
    width: 1000px;
    height: 1000px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
