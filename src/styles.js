import styled from 'styled-components';
export const StyledDiv = styled.div`
   text-align:center;
   margin-top: 15px;
`;

export const StyledDetailsPartition = styled(StyledDiv)`
    width:30%;
`;
export const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: royalblue;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export const StyledPartition = styled(StyledDiv)`
    margin: 5em;
    width:70%;
`;