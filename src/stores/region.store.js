import { fetchData } from "../services/ajax";

/**
 * Returns a set of all region IDs.
 * 
 * @returns {array}
 */
async function getESIRegions() {
    let payload = await fetchData.get("https://esi.evetech.net/latest/universe/regions/?datasource=tranquility");

    return payload;
}

export default getESIRegions;