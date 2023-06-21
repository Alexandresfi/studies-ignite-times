import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { Counter } from '../../components/Counter'
import {
  ContainerForm,
  ContainerHome,
  DurationInput,
  HeaderForm,
  StartCountdonwButton,
  TaskDuration,
  TaskInput,
  TaskTitle,
} from './styles'
import { Play } from 'phosphor-react'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  duration: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  duration: number
  startDate: Date
}

export function Home() {
  const [cycles, setCyles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [durationSecondPass, setDurationSecondPass] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  const hancleCreateNewCycle = (data: NewCycleFormData) => {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      duration: data.duration,
      startDate: new Date(),
    }

    setCyles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - durationSecondPass : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisable = !task

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setDurationSecondPass(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }
  }, [activeCycle])

  return (
    <ContainerHome>
      <ContainerForm onSubmit={handleSubmit(hancleCreateNewCycle)} action="">
        <HeaderForm>
          <TaskTitle htmlFor="task">
            Vou trabalhar em
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
              {...register('task')}
            />
            <datalist id="task-suggestions">
              <option value="teste 1" />
              <option value="teste 2" />
              <option value="teste 3" />
              <option value="teste 4" />
            </datalist>
          </TaskTitle>

          <TaskDuration>
            Duração
            <DurationInput
              type="number"
              placeholder="00"
              step={5}
              min={5}
              max={60}
              id="duration"
              {...register('duration', { valueAsNumber: true })}
            />
            minutos.
          </TaskDuration>
        </HeaderForm>

        <Counter minutes={minutes} seconds={seconds} />
        <StartCountdonwButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} /> Começar
        </StartCountdonwButton>
      </ContainerForm>
    </ContainerHome>
  )
}
