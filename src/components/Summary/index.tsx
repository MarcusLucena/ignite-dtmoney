import * as Style from './styles'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'

export function Summary() {
    return (
        <Style.SummaryContainer>
            <Style.SummaryItemContainer>
                <Style.SummaryHeaderContent>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>R$ 1000,00</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
            <Style.SummaryItemContainer>
                <Style.SummaryHeaderContent>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>R$ 1000,00</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
            <Style.SummaryItemContainer className='entries'>
                <Style.SummaryHeaderContent>
                    <p>Entradas</p>
                    <img src={totalImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>R$ 1000,00</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
        </Style.SummaryContainer>
    )
}