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

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  duration: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  const hancleCreateNewCycle = (data: any) => {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

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

        <Counter />
        <StartCountdonwButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} /> Começar
        </StartCountdonwButton>
      </ContainerForm>
    </ContainerHome>
  )
}
