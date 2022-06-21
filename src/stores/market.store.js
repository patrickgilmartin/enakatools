import { fetchData } from "services/ajax";

export async function getESIAllMarket() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/markets/prices/?datasource=tranquility")

    return payload;
}

export async function getESIAllMarketGroups() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/markets/groups/?datasource=tranquility")

    return payload;
}

export async function getESIMarketGroupByID(groupID) {
    let payload = await fetchData.get(`https://esi.evetech.net/latest/markets/groups/${groupID}/?datasource=tranquility&language=en`)

    return payload;
}

export function setMarketLocal(marketItems) {
    let localStore = {
        marketItems: marketItems
    }

    localStorage.setItem('enakatools', localStore);
}