import { Outlet } from 'react-router-dom'
import { Header } from '../../components'
import { ContainerDefaultLayout } from './styles'

export function DefaultLayout() {
  return (
    <ContainerDefaultLayout>
      <Header />
      <Outlet />
    </ContainerDefaultLayout>
  )
}
