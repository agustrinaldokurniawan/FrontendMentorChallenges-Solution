import styled from 'styled-components';
import {CONSTANTA} from '../../contansta';

interface ContentProps {
  backgroundColor?: string;
  color?: string;
  gap?: number;
  textAlign?: string;
}

export const CardContent = styled.div<ContentProps>`
  color: ${(props) => (props.color ? props.color : CONSTANTA.COLOR.LIGHTGREY)};
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : '20px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')}; ;
`;
