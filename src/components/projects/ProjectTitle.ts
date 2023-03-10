import styled from "styled-components";

const ProjectTitle = styled.a`
  ${({theme}) => `
    color: ${theme.colors.lightestSlate};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  font-size: 24px;
  font-weight: 700;

  &:hover {
    color: ${({theme}) => theme.colors.green};
  }
`;

export default ProjectTitle;