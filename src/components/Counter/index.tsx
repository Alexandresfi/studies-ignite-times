import { ContainerCounter } from './styles'

interface Prosp {
  minutes: string
  seconds: string
}

export function Counter(props: Prosp) {
  const { minutes, seconds } = props

  return (
    <ContainerCounter>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <p>:</p>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </ContainerCounter>
  )
}
