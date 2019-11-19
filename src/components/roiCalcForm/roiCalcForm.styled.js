import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FormBackground = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${ props => props.path });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormWrap = styled.div`
  position: relative;
  width: 1000px;
  padding: 100px 0;
  height: 100%;
  margin: auto;
  z-index: 1;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: .5;
  background-image: linear-gradient(30deg, #63bd74, #000000);
  z-index: 0;
`;