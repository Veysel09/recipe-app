import styled from "styled-components";
export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
 display: flex;
 
`;

export const Image = styled.img`
  width: 750px;
  background: linear-gradient(
    to right,
    rgba(39, 39, 39, 0.9),
    rgba(39, 39, 39, 0.3)
  );
`;
export const AboutText = styled.div`
  font-size: 2rem;
margin: auto;
  padding: 1rem;
  font-weight: 600;
  
`;

export const AboutSpan = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;
