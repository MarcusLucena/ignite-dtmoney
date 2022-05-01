import logo from '../../assets/images/logo.svg'

import * as Styled from './styles'

export function Header() {
    return (
        <Styled.HeaderContainer>
            <Styled.HeaderContent>
                <img src={logo} alt="dt money" />
                <Styled.ButtonTransition type="button">
                    Nova Transação
                </Styled.ButtonTransition>
            </Styled.HeaderContent>
        </Styled.HeaderContainer>
    )
}