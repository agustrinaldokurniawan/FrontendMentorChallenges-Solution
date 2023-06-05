import styled, {css} from 'styled-components';
import {CONSTANTA} from '../contansta';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  active?: boolean;
  hover?: boolean;
}

export const RoundButton = styled.button<ButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  color: ${(props) =>
    props.active
      ? 'white'
      : props.color
      ? props.color
      : CONSTANTA.COLOR.LIGHTGREY};
  background-color: ${(props) =>
    props.active
      ? 'hsl(25, 97%, 53%)'
      : props.backgroundColor
      ? props.backgroundColor
      : CONSTANTA.COLOR.DARKBLUE};
  border: none;
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background-color: ${CONSTANTA.COLOR.MEDIUMGREY};
        color: white;
        cursor: pointer;
      }
    `}
`;
