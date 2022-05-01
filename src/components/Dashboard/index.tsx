import * as Style from './styles'
import {Summary} from "../Summary";
import {TransactionsTable} from "../TransactionsTable";

export function Dashboard() {
    return (
        <Style.DashboardContainer>
            <Summary />
            <TransactionsTable />
        </Style.DashboardContainer>
    )
}