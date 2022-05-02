import Modal from "react-modal";
import * as Style from './styles'
import CloseIcon from '../../assets/images/close.svg'

Modal.setAppElement('#root');

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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

                <Style.FormNewTransactionModal>
                    <input placeholder='Titulo' />
                    <input type='number' placeholder="Valor" />
                    <input placeholder="Categoria" />
                    <button type="submit">Cadastrar</button>
                </Style.FormNewTransactionModal>
            </Modal>
        </>
    )
}