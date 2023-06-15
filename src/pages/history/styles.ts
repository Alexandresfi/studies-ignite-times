import styled from 'styled-components'

export const ContainerHistory = styled.main`
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const ContainerTable = styled.div`
  flex: 1;

  margin-top: 2rem;
  overflow: auto;

  width: 100%;

  table {
    width: inherit;
    min-width: 600px;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};

      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;
      padding: 1rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};

      border-top: 4px solid ${(props) => props.theme['gray-800']};

      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const COLORS_SATATUS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const
interface ColorStatusProps {
  colorStatus: keyof typeof COLORS_SATATUS
}

export const TaskStatus = styled.span<ColorStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;

    background-color: ${(props) =>
      props.theme[COLORS_SATATUS[props.colorStatus]]};
  }
`
