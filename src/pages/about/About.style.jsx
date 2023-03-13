import styled from "styled-components";
export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 750px;
  float: inline-start;
`;
export const AboutText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  float: right;
`;

export const AboutSpan = styled.div`
  font-weight: 700;
`;
