import {GLobalStyle} from "./assets/styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import { createServer } from 'miragejs'
import {NewTransactionModal} from "./components/NewTransactionModal";
import {useState} from "react";
createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    description: 'Salario',
                    value: '5000,00',
                    category: 'saida',
                    date: new Date(),
                }
            ]
        })
    }
})

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        />
        <GLobalStyle />
    </>
  );
}

export default App;
