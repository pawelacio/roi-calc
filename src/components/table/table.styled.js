import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  color: #FFFFFF;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr`
  text-align: center;
  border-bottom: 2px solid #FFFFFF;
`;

export const HeadCell = styled.th`
  text-align: center;
  padding: 14px 8px;
`;

export const Cell = styled.td`
  padding: 14px 8px;

  &:first-of-type {
    text-align: left;
  }

`;