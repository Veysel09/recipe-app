import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";


export const AboutContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column;
`;

export const AboutImg = styled(Flex)`
  width: 350px;
`
