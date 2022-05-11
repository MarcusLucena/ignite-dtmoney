import * as Style from './styles'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import totalImg from '../../assets/images/total.svg'
import React from "react";
import {useTransactions} from "../../hooks/useTransactions";

export function Summary() {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= acc.withdraws
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    function convertToPrice(value: number) {
        return new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    return (
        <Style.SummaryContainer>
            <Style.SummaryItemContainer>
                <Style.SummaryHeaderContent>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>{convertToPrice(summary.deposits)}</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
            <Style.SummaryItemContainer>
                <Style.SummaryHeaderContent>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>{convertToPrice(summary.withdraws)}</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
            <Style.SummaryItemContainer className='entries'>
                <Style.SummaryHeaderContent>
                    <p>Saldo</p>
                    <img src={totalImg} alt='entradas' />
                </Style.SummaryHeaderContent>
                <Style.SummaryValueItem>{convertToPrice(summary.total)}</Style.SummaryValueItem>
            </Style.SummaryItemContainer>
        </Style.SummaryContainer>
    )
}