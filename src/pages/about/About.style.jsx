import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";


export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainColor};
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 350px;
  float: left;
`
export const AboutText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  float: right;
`