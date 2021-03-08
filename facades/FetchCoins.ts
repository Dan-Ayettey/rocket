import { useQuery } from "@apollo/react-hooks";
/*
@useQuery()
implement IGraph to use query
 */
export class FetchCoins implements IGraph{
    useQuery(query: any): any {
        return useQuery(query)
    }
}
