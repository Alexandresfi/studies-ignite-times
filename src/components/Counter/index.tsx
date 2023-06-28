import { useContext, useEffect } from 'react'
import { ContainerCounter } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../contexts/CyclesContext'

export function Counterdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    durationSecondPass,
    handleDurationSecondPass,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - durationSecondPass : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = ` ignite timer ${minutes} : ${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          handleDurationSecondPass(totalSeconds)
          clearInterval(interval)
          console.log(secondsDifference)
        } else {
          handleDurationSecondPass(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    handleDurationSecondPass,
    markCurrentCycleAsFinished,
    totalSeconds,
  ])

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
