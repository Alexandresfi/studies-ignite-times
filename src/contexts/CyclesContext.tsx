import { ReactNode, createContext, useState } from 'react'

interface Cycle {
  id: string
  task: string
  duration: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

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
  const [cycles, setCyles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const [durationSecondPass, setDurationSecondPass] = useState(0)

  function markCurrentCycleAsFinished() {
    setCyles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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

    setCyles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setDurationSecondPass(0)
  }

  function interruptCurrentCycle() {
    setCyles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
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
