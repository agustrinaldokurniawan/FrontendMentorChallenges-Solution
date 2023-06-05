import styled from 'styled-components';
import {CONSTANTA} from '../contansta';

interface LayoutProps {
  backgroundColor?: string;
}
export const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : CONSTANTA.COLOR.VERYDARKBLUE};
`;
