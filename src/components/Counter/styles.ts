import styled from 'styled-components'

export const ContainerCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    max-width: 8rem;
    width: 100%;
    height: 12.375rem;

    display: flex;
    align-items: center;

    font-family: 'Roboto Mono';
    font-weight: bold;
    font-size: 160px;
    line-height: 0px;
    text-align: center;
    color: ${(props) => props.theme['gray-100']};

    background-color: ${(props) => props.theme['gray-700']};

    border-radius: 8px;
  }

  p {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 160px;
    line-height: 0px;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['green-500']};
  }
`
