import styled from 'styled-components'

export const ContainerCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 908px) {
    gap: 0.5rem;
  }

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

    @media (max-width: 908px) {
      max-width: 3rem;
      height: 8.375rem;

      font-size: 88px;
    }
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

    @media (max-width: 908px) {
      font-size: 90px;
    }
  }
`
