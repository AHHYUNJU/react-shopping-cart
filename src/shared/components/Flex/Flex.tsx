import styled from "@emotion/styled";

interface FlexProps {
  direction: "row" | "column";
  justifyContent?: "space-between" | "space-around";
  alignItems?: "center";
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap || "0"};
`;
