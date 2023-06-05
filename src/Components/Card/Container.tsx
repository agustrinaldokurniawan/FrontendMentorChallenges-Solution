import styled from 'styled-components';
import {CONSTANTA} from '../../contansta';

interface ContainerProps {
  background?: string;
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) =>
    props.background
      ? props.background
      : `radial-gradient(ellipse at center top, ${CONSTANTA.COLOR.DARKBLUE}, hsl(213, 19%, 13%) 100%)`};
  min-width: 100px;
  min-height: 100px;
  max-width: 350px;
  padding: 40px;
  border-radius: 30px;
  @media (max-width: 500px) {
    transform: scale(0.9);
  }
`;
