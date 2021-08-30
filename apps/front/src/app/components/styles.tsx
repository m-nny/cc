import styled from 'styled-components';

export const Logo = styled.div`
    min-height: 80px;
    min-width: 80px;

    line-height: 63px;
    font-size: 48px;
    font-weight: bold;
`;

export const Title = styled.div`
    min-height: 60px;
    min-width: 400px;

    line-height: 47px;
    font-size: 36px;
    font-weight: normal;

    text-align: center;
`;

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

export const PageWrapper = styled.div`
    padding: 20px;
    width: 1000px;
    height: 1000px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    //background: grey;
`;
export const PageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
