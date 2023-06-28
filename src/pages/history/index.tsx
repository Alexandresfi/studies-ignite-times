import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ContainerTable, ContainerHistory, TaskStatus } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <ContainerHistory>
      <h1>Meu histórico</h1>
      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicío</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.duration} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishDate && (
                    <TaskStatus colorStatus="green">Concluído</TaskStatus>
                  )}
                  {cycle.interruptedDate && (
                    <TaskStatus colorStatus="red">Interrupido</TaskStatus>
                  )}
                  {!cycle.interruptedDate && !cycle.finishDate && (
                    <TaskStatus colorStatus="yellow">Em andamento</TaskStatus>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContainerTable>
    </ContainerHistory>
  )
}
