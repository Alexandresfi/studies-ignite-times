import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { differenceInSeconds } from 'date-fns'

import { Cycle, cyclesRefucer } from '../reducers/cycles/redurces'

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

interface NewCycleData {
  task: string
  duration: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  durationSecondPass: number
  markCurrentCycleAsFinished: () => void
  handleDurationSecondPass: (totalSeconds: number) => void
  createNewCycle: (data: NewCycleData) => void
  interruptCurrentCycle: () => void
}

interface CyclesContextProiderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProiderProps) {
  const [cycleState, dispatch] = useReducer(
    cyclesRefucer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cycleState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cycleState])

  const { cycles, activeCycleId } = cycleState
  const activeCycle = cycles?.find((cycle) => cycle.id === activeCycleId)

  const [durationSecondPass, setDurationSecondPass] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  const handleDurationSecondPass = (totalSeconds: number) => {
    setDurationSecondPass(totalSeconds)
  }

  const createNewCycle = (data: NewCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      duration: data.duration,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    // setCyles((state) => [...state, newCycle])
    setDurationSecondPass(0)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        durationSecondPass,
        handleDurationSecondPass,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
