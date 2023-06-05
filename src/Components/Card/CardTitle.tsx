import styled from 'styled-components';
import {CONSTANTA} from '../../contansta';

interface TitleProps {
  backgroundColor?: string;
  color?: string;
  textAlign?: string;
}

export const CardTitle = styled.h2<TitleProps>`
  color: ${(props) => (props.color ? props.color : CONSTANTA.COLOR.WHITE)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')}; ;
`;
