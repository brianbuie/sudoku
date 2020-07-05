import styled from "styled-components";

const FlexItem = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "start"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
`;

export const FlexRow = styled(FlexItem)`
  flex-direction: row;
`;
