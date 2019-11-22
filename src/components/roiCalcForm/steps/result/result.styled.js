import styled, { css } from 'styled-components';

export const StepWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #FFFFFF;
  margin: 20px 0;
`;

export const Icon = styled.img`

`;

export const Text = styled.div`
  font-size: 21px;
  line-height: 1.4;
  text-align: center;
  color: #FFFFFF;
  margin: 10px 0;

  ${ props => props.highlighted && css `
    font-weight: 700;
  `}

  ${ props => props.small && css`
    font-size: 16px;
  `}
`;

export const InputWrap = styled.div`
  margin: 20px 0;
`;
