import * as Style from './styles'
import {useEffect, useState} from "react";

type Moviments = {
    description: string;
    value: string;
    category: string;
    date: string;
}

export function TransactionsTable() {
    const [moviments, setMoviments] = useState<Moviments[]>([])

    useEffect(() => {
        let values = []
        values.push({
            description: 'Salario',
            value: '4.500,00',
            category: 'Entrada',
            date: '05/11/2023',

        })
        values.push({
            description: 'Mercado',
            value: '500,00',
            category: 'Saída',
            date: '06/11/2023',

        })
        setMoviments(values)
    })

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
                    moviments.map( item => {
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