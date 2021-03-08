import { FetchCoins } from "./FetchCoins";

/*
  Use FetchCoin class
 */
export class UseFetchCoins {
    coins:FetchCoins

    constructor() {
        this.coins=new FetchCoins()
    }
    // Query for coin resources or data that we need prior to populating the list
   useFetchCoins(query:any){
       return  this.coins.useQuery(query)
    }

}
