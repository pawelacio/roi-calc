import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  padding: 20px 0;
`;

export const NavBar = styled.div`
  height: 4px;
  margin-left: 16px;
  width: 80px;
  background-color: ${ props => props.active ? '#5db98f' : '#59595b' };
`;