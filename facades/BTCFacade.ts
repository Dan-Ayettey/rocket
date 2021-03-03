class BTCFacade implements Routes{
   async fetch(url: string, option: {}): Promise<any> {
        return await window.fetch(url,option)
    }

}
