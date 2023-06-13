import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      color: ${(props) => props.theme['gray-100']};

      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-500']};
      }
    }
    .active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
