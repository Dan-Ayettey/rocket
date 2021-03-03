export class Facade {
    BTCFacade:BTCFacade
    ETHFacade:ETHFacade
    constructor() {
        this.BTCFacade=new BTCFacade()
        this.ETHFacade=new ETHFacade()
    }
    async facadeBTC(url:string,option:{}){
       return await this.BTCFacade.fetch(url,option)
    }
  async  facadeETH(url:string,option:{}){
        return await this.ETHFacade.fetch(url,option)
    }
}
