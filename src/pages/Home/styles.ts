import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 160%;
`


export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.5rem;
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 8px;

  font-weight: bold;
  font-size: 1rem;
  line-height: 1.8125rem;
  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountDownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
