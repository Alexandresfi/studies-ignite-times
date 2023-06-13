import styled from 'styled-components'

export const ContainerDefaultLayout = styled.div`
  max-width: 74rem;
  width: 100%;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-500']};

  border-radius: 0.5rem;
`
