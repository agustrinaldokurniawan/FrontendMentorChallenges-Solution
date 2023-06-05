import styled from 'styled-components';

interface RowBoxProps {
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  width?: number;
}

export const RowBox = styled.div<RowBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;
