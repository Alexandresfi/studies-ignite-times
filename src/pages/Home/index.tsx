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
import { Plus, Minus, Play } from 'phosphor-react'

export function Home() {
  return (
    <ContainerHome>
      <ContainerForm action="">
        <HeaderForm>
          <TaskTitle htmlFor="task">
            Vou trabalhar em
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
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
            />
            minutos.
          </TaskDuration>
        </HeaderForm>

        <ContainerForm>
          <Counter />
          <StartCountdonwButton type="submit">
            <Play size={24} /> Começar
          </StartCountdonwButton>
        </ContainerForm>
      </ContainerForm>
    </ContainerHome>
  )
}
