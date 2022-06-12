import { fetchData } from "../utils/ajax";

/**
 * Returns a name object array in reference to ID given. 
 * 
 * @param {array} idArray 
 * @returns {array}
 */
async function getESINamesByID(idArray) {
    let names = await fetchData.post("https://esi.evetech.net/latest/universe/names/?datasource=tranquility", idArray)

    return names;
}

export default getESINamesByID;