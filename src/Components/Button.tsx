import styled, {css} from 'styled-components';
import {CONSTANTA} from '../contansta';

interface Button {
  color?: string;
  backgroundColor?: string;
  hover?: boolean;
  width?: string;
}

export const Button = styled.button<Button>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 15px;
  border-radius: 50px;
  color: ${(props) => (props.color ? props.color : CONSTANTA.COLOR.WHITE)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : CONSTANTA.COLOR.ORANGE};
  border: none;
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background-color: white;
        color: ${CONSTANTA.COLOR.ORANGE};
        cursor: pointer;
      }
    `}
`;
