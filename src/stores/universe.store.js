import { fetchData } from "services/ajax";

/**
 * Returns a name object array in reference to ID given. 
 * 
 * @param {array} idArray 
 * @returns {array}
 */
export async function getESINamesByID(idArray) {
    let names = await fetchData.post("https://esi.evetech.net/latest/universe/names/?datasource=tranquility", idArray);

    return names;
}

export async function getESICategoryIDs() {
    let categoryIDs = await fetchData.get("https://esi.evetech.net/latest/universe/categories/?datasource=tranquility");

    return categoryIDs;
}

export async function getESICategoryByID(categoryID) {
    let categories = await fetchData.get(`https://esi.evetech.net/latest/universe/categories/${categoryID}/?datasource=tranquility&language=en`);

    return categories;
}

export async function getESIGroupIDs() {
    let [groupIDPage1, groupIDPage2] = await Promise.all([
        fetchData.get("https://esi.evetech.net/latest/universe/groups/?datasource=tranquility&page=1"),
        fetchData.get("https://esi.evetech.net/latest/universe/groups/?datasource=tranquility&page=2")
    ]);
    let groupIDs = [...groupIDPage1, ...groupIDPage2];

    return groupIDs;
}

export async function getESIGroupsByID(groupID) {
    let group = await fetchData.get(`https://esi.evetech.net/latest/universe/groups/${groupID}/?datasource=tranquility&language=en`);

    return group;
}