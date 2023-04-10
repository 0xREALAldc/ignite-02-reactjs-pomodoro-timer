import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 118.4rem;
  height: calc(100vh - 16rem); //some space will be avvailable for the margin
  margin: 8rem auto; // above and below will have 8rem margin, and auto for the sides to centralize the container
  padding: 4rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
