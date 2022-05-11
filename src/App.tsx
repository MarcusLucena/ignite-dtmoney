import {GLobalStyle} from "./assets/styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import { createServer, Model } from 'miragejs'
import {NewTransactionModal} from "./components/NewTransactionModal";
import {useState} from "react";
import { TransactionsProvider} from "./hooks/useTransactions";

createServer({
    models: {
        transaction: Model,
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        })
    },
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
    <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
        />
        <GLobalStyle />
    </TransactionsProvider>
  );
}

export default App;
