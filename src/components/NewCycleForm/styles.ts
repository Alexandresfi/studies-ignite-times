import styled from 'styled-components'

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 908px) {
    flex-direction: column;
    align-items: baseline;
  }
`

export const TaskTitle = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 908px) {
    flex-direction: column;
    align-items: baseline;
  }
`

export const TaskDuration = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 908px) {
    flex-direction: column;
    align-items: baseline;
  }
`

const BaseInput = styled.input`
  background-color: transparent;

  height: 2.5rem;

  font-size: 1.36rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  padding: 0 0.5rem;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 100%;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const DurationInput = styled(BaseInput)`
  width: 4rem;

  &::placeholder {
    text-align: center;
  }
`
