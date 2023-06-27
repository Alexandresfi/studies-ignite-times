import { useFormContext } from 'react-hook-form'

import {
  DurationInput,
  HeaderForm,
  TaskDuration,
  TaskInput,
  TaskTitle,
} from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../pages/Home'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <HeaderForm>
      <TaskTitle htmlFor="task">
        Vou trabalhar em
        <TaskInput
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
          list="task-suggestions"
          disabled={!!activeCycle}
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
          min={1}
          max={60}
          id="duration"
          disabled={!!activeCycle}
          {...register('duration', { valueAsNumber: true })}
        />
        minutos.
      </TaskDuration>
    </HeaderForm>
  )
}
