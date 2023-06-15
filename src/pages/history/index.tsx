import { ContainerTable, ContainerHistory, TaskStatus } from './styles'

export function History() {
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
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <TaskStatus colorStatus="green">concluído</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <TaskStatus colorStatus="green">concluído</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <TaskStatus colorStatus="green">concluído</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <TaskStatus colorStatus="green">concluído</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <TaskStatus colorStatus="green">concluído</TaskStatus>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </ContainerHistory>
  )
}
