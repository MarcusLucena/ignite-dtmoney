import * as Style from './styles'
import {useEffect, useState} from "react";
import {api} from "../../services/api";

type TransactionsType = {
    id: number;
    description: string;
    value: string;
    category: string;
    date: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<TransactionsType[]>([])

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data))
    }, [])

    const setClassName = (type: string) => {
        return type === 'Entrada' ? 'greenColor' : 'redColor';
    }
    return (
        <Style.TransactionsTableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                {
                    transactions.map( item => {
                        return (
                            <tr>
                                <td>{item.description}</td>
                                <td className={setClassName(item.category)}>{item.value}</td>
                                <td>{item.category}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </Style.TransactionsTableContainer>
    )
}