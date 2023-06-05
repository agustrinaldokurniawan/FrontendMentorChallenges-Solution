import styled from 'styled-components';

interface Props {
  color?: string;
  backgroundColor?: string;
  gap?: number;
}

export const CardHeader = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : '0px')};
`;
