import * as Styled from './styles'

import logo from '../../assets/images/logo.svg'

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <>
            <Styled.HeaderContainer>
                <Styled.HeaderContent>
                    <img src={logo} alt="dt money" />
                    <Styled.ButtonTransition type="button" onClick={onOpenNewTransactionModal}>
                        Nova Transação
                    </Styled.ButtonTransition>
                </Styled.HeaderContent>
            </Styled.HeaderContainer>
        </>
    )
}