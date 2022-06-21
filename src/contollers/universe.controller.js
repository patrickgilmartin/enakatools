import { localStore } from 'modules/storage';
import { getESICategoryByID, getESICategoryIDs, getESINamesByID } from "stores/universe.store";
import getESIRegions from 'stores/region.store';

/**
 * 
 * @returns {array}
 */
export async function getNamedRegions() {
    let regionIDs = await getESIRegions();
    let regions = await getESINamesByID(regionIDs);

    return regions;
}

export async function getNamedCategories() {
    let categories = [];
    let categoryIDs = await getESICategoryIDs();
    for (let categoryID of categoryIDs) {
        let category = await getESICategoryByID(categoryID);
        categories.push(category);
    }

    return categories;
}