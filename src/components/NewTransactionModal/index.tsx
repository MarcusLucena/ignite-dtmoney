import React, {FormEvent} from "react";

import Modal from "react-modal";
import * as Style from './styles'
import CloseIcon from '../../assets/images/close.svg'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'

import {useTransactions} from "../../hooks/useTransactions";

Modal.setAppElement('#root');

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} = useTransactions()
    const [title, setTitle] = React.useState('')
    const [amount, setAmount] = React.useState(0)
    const [category, setCategory] = React.useState('')
    const [type, setType] = React.useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setCategory('')
        setType('deposit')
        setAmount(0)
        onRequestClose()
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Example Modal"
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <Style.CloseNewTransactionModalButton onClick={onRequestClose}>
                    <img src={CloseIcon} alt='Fechar Modal' />
                </Style.CloseNewTransactionModalButton>

                <Style.TitleModalTransactions>Cadastra Transação</Style.TitleModalTransactions>

                <Style.FormNewTransactionModal onSubmit={handleCreateNewTransaction}>
                    <input placeholder='Titulo'
                           value={title}
                           onChange={event => setTitle(event.target.value)}/>

                    <input type='number'
                           placeholder="Valor"
                           value={amount}
                           onChange={event => setAmount(Number(event.target.value))}/>

                    <Style.TransactionTypeContainer>
                        <Style.RadioBox
                            type="button"
                            onClick={() => setType('deposit')}
                            isActive={type === 'deposit'}
                            activeColor="green"
                        >
                            <img src={incomeImg} alt='Entrada de receitas' />
                            <span>Entrada</span>
                        </Style.RadioBox>

                        <Style.RadioBox
                            type="button"
                            onClick={() => setType('withdraw')}
                            isActive={type === 'withdraw'}
                            activeColor="red">
                            <img src={outcomeImg} alt='Saída de receitas' />
                            <span>Saída</span>
                        </Style.RadioBox>
                    </Style.TransactionTypeContainer>

                    <input
                        placeholder="Categoria"
                        value={category}
                        onChange={event => setCategory(event.target.value)}/>

                    <button type="submit">Cadastrar</button>
                </Style.FormNewTransactionModal>
            </Modal>
        </>
    )
}