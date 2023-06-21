import { ContainerCounter } from './styles'

interface Prosp {
  minutes: string
  seconds: string
}

export function Counter(props: Prosp) {
  return (
    <ContainerCounter>
      <span>{props.minutes[0]}</span>
      <span>{props.minutes[1]}</span>
      <p>:</p>
      <span>{props.seconds[0]}</span>
      <span>{props.seconds[1]}</span>
    </ContainerCounter>
  )
}
