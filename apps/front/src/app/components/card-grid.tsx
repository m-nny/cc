import styled from 'styled-components';

export const Grid = styled.div`
    padding: 0;
    height: 100%;
    width: 100%;

    display: grid;
    justify-items: center;
    align-items: center;

    justify-content: space-around;
    align-content: start;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* This is better for small screens, once min() is better supported */
    /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
    gap: 1rem;
`;
