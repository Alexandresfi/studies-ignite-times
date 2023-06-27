import { createContext, useState } from 'react'
import { Counterdown } from '../../components/Counter'
import {
  ContainerForm,
  ContainerHome,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import { HandPalm, Play } from 'phosphor-react'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewCycleForm } from '../../components/NewCycleForm'
import { FormProvider, useForm } from 'react-hook-form'

interface Cycle {
  id: string
  task: string
  duration: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  durationSecondPass: number
  markCurrentCycleAsFinished: () => void
  handleDurationSecondPass: (totalSeconds: number) => void
}
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, 'Informe a tarefa'),
  duration: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
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

  const id = String(new Date().getTime())

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisable = !task

  const handleDurationSecondPass = (totalSeconds: number) => {
    setDurationSecondPass(totalSeconds)
  }

  const hancleCreateNewCycle = (data: NewCycleFormData) => {
    const newCycle: Cycle = {
      id,
      task: data.task,
      duration: data.duration,
      startDate: new Date(),
    }

    setCyles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setDurationSecondPass(0)
    reset()
  }

  function handleInterruptCycle() {
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
    <ContainerHome>
      <CyclesContext.Provider
        value={{
          activeCycle,
          activeCycleId,
          markCurrentCycleAsFinished,
          durationSecondPass,
          handleDurationSecondPass,
        }}
      >
        <ContainerForm onSubmit={handleSubmit(hancleCreateNewCycle)} action="">
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Counterdown />
          {activeCycle ? (
            <StopCountDownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} /> Interromper
            </StopCountDownButton>
          ) : (
            <StartCountDownButton type="submit" disabled={isSubmitDisable}>
              <Play size={24} /> Começar
            </StartCountDownButton>
          )}
        </ContainerForm>
      </CyclesContext.Provider>
    </ContainerHome>
  )
}
