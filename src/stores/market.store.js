import { fetchData } from "../utils/ajax";

export async function getESIAllMarket() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/markets/prices/?datasource=tranquility")

    return payload;
}

export async function getMarketGroups() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/markets/groups/?datasource=tranquility")

    return payload;
}

export async function getMarketGroupByID(groupID) {
    let payload = await fetchData.get(`https://esi.evetech.net/latest/markets/groups/${groupID}/?datasource=tranquility&language=en`)

    return payload;
}

export function setMarketLocal(marketItems) {
    let localStore = {
        marketItems: marketItems
    }
    
    localStorage.setItem('enakatools', localStore);
}