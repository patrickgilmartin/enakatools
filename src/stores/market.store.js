import { fetchData } from "../utils/ajax";

export async function getESIAllMarket() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/markets/prices/?datasource=tranquility")

    return payload;
}