import React, {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "../services/api";

type TransactionsType = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionProviderProps = {
    children: ReactNode
}

type TransactionInputType = Omit<TransactionsType, 'id' | 'createdAt'>

type TransactionsData = {
    transactions: TransactionsType[]
    createTransaction: (transaction: TransactionInputType) => Promise<void>
}

const TransactionsContext = createContext<TransactionsData>({} as TransactionsData)

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsType[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions)
            })
    }, [])

    async function createTransaction(transactionInput: TransactionInputType) {

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data
        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = React.useContext(TransactionsContext)

    return context
}