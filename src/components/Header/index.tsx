import { NavLink } from 'react-router-dom'

import { Timer, Scroll } from 'phosphor-react'

import { ContainerHeader } from './styles'

import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to={'/history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </ContainerHeader>
  )
}
